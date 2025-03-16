from django.shortcuts import render
from rest_framework import viewsets
from .models import Appointment 
from .serializers import SpecialistAppointmentSerializer , ParentAppointmentSerializer, AppointmentSerializer
from .permissions import IsParent , IsSpecialist
# Create your views here.
class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all() 

    # def get_permissions(self):
    #     if self.action == "create":
    #         permission_classes = [IsParent]
    #     else:
    #         permission_classes = [IsParent , IsSpecialist]
    #     return [permission() for permission in permission_classes]
    
    def get_serializer_class(self):
        if not self.request.user.is_anonymous and self.request.user.is_parent():
            return ParentAppointmentSerializer
        elif not self.request.user.is_anonymous and self.request.user.is_specialist():
            return SpecialistAppointmentSerializer
        
    def get_serializer_context(self):
        serializer_context = {
            "request": self.request,
        }

        specialist_pk = self.kwargs.get("specialist_pk")
        if specialist_pk is not None:
            serializer_context["specialist_id"] = specialist_pk

        parent_pk = self.kwargs.get("parent_pk")
        if parent_pk is not None:
            serializer_context["parent_id"] = parent_pk

        return serializer_context


    def get_queryset(self):
        queryset = Appointment.objects.all()
        serializer_context = self.get_serializer_context()
        specialist_pk = serializer_context.get("specialist_id")
        parent_pk = serializer_context.get("parent_id")
        if specialist_pk is not None:
            queryset = queryset.filter(specialist=specialist_pk)
        if parent_pk is not None:
            queryset = queryset.filter(parent=parent_pk)
        return queryset
