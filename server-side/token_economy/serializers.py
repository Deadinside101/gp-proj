from rest_framework import serializers

from .models import Token, TokenEconomy


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = "__all__"


class TokenEconomySerializer(serializers.ModelSerializer):
    token = serializers.StringRelatedField()

    class Meta:
        model = TokenEconomy
        fields = ["id", "quantity", "token"]
        extra_kwargs = {"user": {"read_only": True}}

    def create(self, validated_data):
        request = self.context.get("request")
        validated_data.pop("user")
        return self().create(user=request.user, **validated_data)
