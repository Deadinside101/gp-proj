from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from accounts.models import Specialist, Parent
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["id", "rating", "comment", "user", "reviewed_user"]
        validators = [
            UniqueTogetherValidator(
                queryset=Review.objects.all(),
                fields=("user", "reviewed_user"),
                message="You have already reviewed this user.",
            )
        ]

    def create(self, validated_data):
        validated_data.pop("user")
        validated_data.pop("reviewed_user")
        request = self.context.get("request")
        parent = Parent.objects.get(user=request.user)
        specialist = Specialist.objects.get(pk=self.context.get("reviewed_user_id"))
        return Review.objects.create(
            user=parent, reviewed_user=specialist, **validated_data
        )
