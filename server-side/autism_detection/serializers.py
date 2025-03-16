from rest_framework import serializers 
from accounts.models import CustomUser
from django_countries.serializer_fields import CountryField
from django.db import models

class Tester(models.TextChoices):
    FRIEND = "friend" 
    RELATIVE = "relative"
    HEALTH_CARE_PROFSSIONAL = "health care profissional"
    PARENT = "parent"
    SELF = "self"
    TEACHER = "teacher"

class DetectorSerializer(serializers.Serializer):
    q1 = serializers.BooleanField()
    q2 = serializers.BooleanField()
    q3 = serializers.BooleanField()
    q4 = serializers.BooleanField()
    q5 = serializers.BooleanField()
    q6 = serializers.BooleanField()
    q7 = serializers.BooleanField()
    q8 = serializers.BooleanField()
    q9 = serializers.BooleanField()
    q10 = serializers.BooleanField()
    age = serializers.CharField(max_length=10)
    language = serializers.CharField(max_length=50)
    gender = serializers.BooleanField()
    ethnicity = serializers.CharField(max_length= 100)
    jaundice = serializers.BooleanField()
    family_member_with_pdd = serializers.BooleanField()
    tester = serializers.ChoiceField(
        choices=Tester.choices, default=Tester.PARENT, read_only=True
    )
    used_before = serializers.BooleanField()

