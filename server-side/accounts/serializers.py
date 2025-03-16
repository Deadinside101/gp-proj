from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

from .models import Child, CustomUser, Parent, Specialist
from token_economy.models import TokenEconomy
from token_economy.serializers import TokenEconomySerializer
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    username = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(max_length=50, required=True)
    last_name = serializers.CharField(max_length=50, required=True)
    phone_number = serializers.CharField(max_length=17, required=False)
    birthdate = serializers.DateField(required=False)
    profile_image = serializers.ImageField(required=False)
    role = serializers.ChoiceField(
        choices=CustomUser.Role.choices, default=CustomUser.Role.CHILD, read_only=True
    )
    country = serializers.CharField(max_length=50, required=False)
    city = serializers.CharField(max_length=50, required=False)
    address = serializers.CharField(max_length=100, required=False)
    
    #
    # def validate_password(self, value):
    #     return validate_password(value)
    #

    def create(self, validated_data):
        password = validated_data.pop("password")
        email = validated_data.pop("email")
        user = CustomUser.objects.create_user(
            email=email, password=password, **validated_data
        )
        return user

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.phone_number = validated_data.get(
            "phone_number", instance.phone_number
        )
        instance.birthdate = validated_data.get("birthdate", instance.birthdate)
        instance.profile_image = validated_data.get(
            "profile_image", instance.profile_image
        )
        if "password" in validated_data and not None:
            password = validated_data.pop("password")
            instance.set_password(password)
        return instance.save()


class ParentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    children = serializers.HyperlinkedRelatedField(
        read_only= True, many=True, view_name="child-detail"
    )

    class Meta:
        model = Parent
        fields = ["user", "children"]

    def create(self, validated_data):
        user_data = validated_data.pop("user")
        user = CustomUser.objects.create_user(**user_data, role=CustomUser.Role.PARENT)
        parent, _ = Parent.objects.get_or_create(user=user)
        return parent

    def update(self, instance, validated_data):
        user_data = validated_data.pop("user")
        user_serializer = self.fields["user"]
        user_instance = instance.user
        user_serializer.update(user_instance, user_data)
        instance.save()
        return instance


class SpecialistSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    cv = serializers.FileField(allow_null=False, required=True)
    class Meta:
        model = Specialist
        fields = "__all__"

    def create(self, validated_data):
        user_data = validated_data.pop("user")
        user = CustomUser.objects.create_user(
            **user_data, role=CustomUser.Role.SPECIALIST
        )
        specialist, _ = Specialist.objects.get_or_create(user=user)
        specialist.specialization = validated_data.pop("specialization")
        cv_file = validated_data.pop("cv", None)
        if cv_file:
            file_name = cv_file.name
            file_path = os.path.join("cvs", file_name) 
            file_content = ContentFile(cv_file.read())
            cv_file_path = default_storage.save(file_path, file_content)
            specialist.cv = cv_file_path  
        specialist.save()  
        return specialist

    def update(self, instance, validated_data):
        user_data = validated_data.pop("user")
        user_serializer = self.fields["user"]
        user_instance = instance.user
        user_serializer.update(user_instance, user_data)

        instance.specialization = validated_data.get(
            "specialization", instance.specialization
        )
        instance.cv = validated_data.get("cv", instance.cv)

        instance.save()
        return instance


class ChildSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    user_economy = serializers.HyperlinkedRelatedField(
         many=True, view_name="tokeneconomy-detail", read_only=True
    )

    class Meta:
        model = Child
        fields = ["user", "user_economy"]
        extra_kwargs = {
            "parent": {"read_only": True},
            "user_economy": {"read_only": True},
        }

    def create(self, validated_data):
        user_data = validated_data.pop("user")
        user = CustomUser.objects.create_user(**user_data, role=CustomUser.Role.CHILD)
        child, _ = Child.objects.get_or_create(user=user)
        request = self.context.get("request")
        if not request.user.is_anonymous:
            if request.user.is_parent():
                child.parent = Parent.objects.get(user=request.user)
        child.save()
        return child

    def update(self, instance, validated_data):
        user_data = validated_data.pop("user")
        user_serializer = self.fields["user"]
        user_instance = instance.user
        user_serializer.update(user_instance, user_data)

        instance.save()
        return instance
