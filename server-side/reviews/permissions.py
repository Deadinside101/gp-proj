from rest_framework import permissions
from rest_framework.permissions import BasePermission


class IsAuthenticatedAndOwner(BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return (not request.user.is_anonymous) and request.user.is_parent()

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user == obj.user
