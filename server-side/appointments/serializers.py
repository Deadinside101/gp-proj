from rest_framework import serializers 
from .models import Appointment 
from accounts.models import Specialist , Parent 


class AppointmentSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Appointment 
        fields = ["id" , "parent", "specialist", "date_time" , "status"]

    def create(self, validated_data):
        request = self.context.get("request")
        specialist_id = self.context.get("specialist_pk")
        parent = Parent.objects.get(user=request.user)
        specialist = Specialist.objects.get(pk= specialist_id)
        return self.Meta.model.objects.create(specialist=specialist, parent= parent, **validated_data)    

class ParentAppointmentSerializer(AppointmentSerializer):
    class Meta(AppointmentSerializer.Meta):
        read_only_fields = ["id" , "status", "parent" , "specialist"]
        extra_kwargs = {
            "date_time" : {"required": True, }, 
            "status": {"required": False, },
        }
    def create(self, validated_data):
        return super().create(validated_data)

class SpecialistAppointmentSerializer(AppointmentSerializer):
    class Meta(AppointmentSerializer.Meta):
        read_only_fields = ["id" , "date_time", "parent" , "specialist"]
        extra_kwargs = {
            "date_time" : {"required": False, },
            "status": {"required": True, },
        }
    def create(self, validated_data):
        return super().create(validated_data)

