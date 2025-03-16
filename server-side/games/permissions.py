from rest_framework import permissions
from rest_framework.permissions import AllowAny, BasePermission, IsAdminUser

from accounts.permissions import IsChild


class IsChildOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return request.user == obj.player.user
