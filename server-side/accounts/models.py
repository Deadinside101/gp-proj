from django.conf import settings
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import FileExtensionValidator
from django.db import models
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from phone_field import PhoneField

# managers


class CustomManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("The Email must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("role", "ADMIN")
        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True, null=False)
    first_name = models.CharField(max_length=50, null=False, blank=False)
    last_name = models.CharField(max_length=50, null=False, blank=False)

    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        CHILD = "CHILD", "Child"
        PARENT = "PARENT", "Parent"
        SPECIALIST = "SPECIALIST", "Specialist"

    country = models.CharField(max_length=50 , null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    address = models.CharField(max_length=100, null= True , blank=True)
    phone_number = PhoneField(blank=True, null=True, help_text="Contact phone number")
    birthdate = models.DateField(null=True, blank=True, auto_now=False)
    profile_image = models.ImageField(upload_to="images", null=True, blank=True)
    role = models.CharField(choices=Role.choices, max_length=20, null=False)
    objects = CustomManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name", "last_name"]

    def __str__(self) -> str:
        return f"{self.username}"

    def save(self, *args, **kwargs):
        is_admin = bool(self.role == self.Role.ADMIN)
        if not self.pk:
            self.is_superuser = is_admin
            self.is_staff = is_admin
        return super().save(*args, **kwargs)

    def is_parent(self):
        return self.role == self.Role.PARENT

    def is_child(self):
        return self.role == self.Role.CHILD

    def is_specialist(self):
        return self.role == self.Role.SPECIALIST


class Parent(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="parent", 
        primary_key=True
    )

    def __str__(self) -> str:
        return f"{self.user.username}"


class Specialist(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="specialist", 
        primary_key= True 
    )
    specialization = models.CharField(max_length=255)
    cv = models.FileField(
        upload_to="cvs",
        null=True,
        blank=True,
        validators=[FileExtensionValidator(["pdf"])],
    )

    def __str__(self) -> str:
        return f"{self.user.username}"


class Child(models.Model):
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="child", 
        primary_key= True 
    )
    parent = models.ForeignKey(
        Parent,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="children",
    )

    def __str__(self) -> str:
        return f"{self.user.username}"


@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created and instance.is_parent():
        Parent.objects.get_or_create(user=instance)
    elif created and instance.is_specialist():
        Specialist.objects.get_or_create(user=instance)
    elif created and instance.is_child():
        Child.objects.get_or_create(user=instance)


@receiver(pre_save, sender=CustomUser)
def edit_user_role(sender, instance, **kwargs):
    if instance.id is not None:
        user = CustomUser.objects.get(id=instance.id)
        if user.role != instance.role:
            instance.role = user.role
