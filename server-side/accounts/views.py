from rest_framework import status, viewsets 
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .geolocation import GeoLocation
import json
from .models import Child, CustomUser, Parent, Specialist
from .permissions import IsChild, IsChildParent, IsParent, IsSpecialist
from .serializers import (
    ChildSerializer,
    ParentSerializer,
    SpecialistSerializer,
    UserSerializer,
)

# Create your views here.


class ParentViewSet(viewsets.ModelViewSet):
    serializer_class = ParentSerializer
    queryset = Parent.objects.all()

    def get_permissions(self):
        if self.action == "list" or self.action == "retrive" or self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsParent]
        return [permission() for permission in permission_classes]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        user = instance.user
        self.perform_destroy(instance)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SpecialistViewSet(viewsets.ModelViewSet):
    serializer_class = SpecialistSerializer
    queryset = Specialist.objects.all()

    def get_permissions(self):
        if self.action == "list" or self.action == "retrive" or self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsSpecialist]
        return [permission() for permission in permission_classes]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        user = instance.user
        self.perform_destroy(instance)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def list(self, request, *args, **kwargs):
        ip = GeoLocation.find_user_ip(request=request)
        location_data = json.loads(GeoLocation.get_location())
        city = location_data['city']
        if city : 
            queryset = Specialist.objects.filter(user__city=city)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        else:
            return Response("City information not available.", status=status.HTTP_400_BAD_REQUEST)


class ChildViewSet(viewsets.ModelViewSet):
    serializer_class = ChildSerializer
    queryset = Child.objects.all()

    def get_permissions(self):
        if self.action == "list" or self.action == "retrive" or self.action == "create":
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsChild, IsChildParent]
        return [permission() for permission in permission_classes]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        user = instance.user
        self.perform_destroy(instance)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

class BlacklistTokenUpdateView(APIView):
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)