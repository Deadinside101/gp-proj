from rest_framework import serializers

from .models import Game, GameLog
from accounts.models import Child


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = "__all__"


class GameLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameLog
        fields = "__all__"
        extra_kwargs = {"player": {"read_only": True}}

    def create(self, validated_data):
        validated_data.pop("player")
        request = self.context.get("request")
        child = Child.objects.get(user=request.user)
        return self().create(player=child, **validated_data)
