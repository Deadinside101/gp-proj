from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from accounts.permissions import IsParent

from .models import Review
from .permissions import IsAuthenticatedAndOwner
from .serializers import ReviewSerializer

# Create your views here.


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer

    def get_permissions(self):
        if self.action == "create":
            permission_classes = [IsParent]
        elif (
            self.action == "destroy"
            or self.action == "update"
            or self.action == "partial_update"
        ):
            permission_classes = [IsAuthenticatedAndOwner]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]

    def get_serializer_context(self):
        return {
            "reviewed_user_id": self.kwargs["specialist_pk"],
            "request": self.request,
        }

    def get_queryset(self):
        return Review.objects.filter(reviewed_user_id=self.kwargs["specialist_pk"])
