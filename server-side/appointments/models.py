from django.db import models
from accounts.models import Specialist, Parent


# Create your models here.
class Appointment(models.Model):
    specialist = models.ForeignKey(
        Specialist, on_delete=models.CASCADE, related_name="appointment_specialist", null=True, blank=True
    )
    parent = models.ForeignKey(
        Parent, on_delete=models.CASCADE, related_name="appointment_parent", null=True, blank=True
    )
    date_time = models.DateTimeField(auto_now_add=False, auto_now=False)

    class Status(models.TextChoices):
        APPROVED = "APPROVED", "Aprroved"
        PENDING = "PENDING", "Pending"
        DECLINED = "DECLINED", "Declined"

    status = models.CharField(
        choices=Status.choices, default=Status.PENDING, null=False, max_length=20
    )

    class Meta:
        unique_together = (("parent", "date_time"), 
                           ("specialist" , "date_time") , )
        