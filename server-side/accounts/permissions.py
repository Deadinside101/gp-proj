from rest_framework import permissions
from rest_framework.permissions import BasePermission


class IsParent(BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user.is_parent()

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user == obj.user


class IsSpecialist(BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user.is_specialist()

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user == obj.user


class IsChild(BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user.is_child()

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user == obj.user


class IsChildParent(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        elif not request.user.is_anonymous:
            return request.user == obj.parent.user
