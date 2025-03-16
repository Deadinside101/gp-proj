from django.shortcuts import render
from rest_framework import viewsets
from .permissions import IsChild, IsAdminUser
from .serializers import TokenSerializer, TokenEconomySerializer
from rest_framework.decorators import action
from accounts.models import Child 
from games.models import Game 
from .models import TokenEconomy , Token
from rest_framework.response import Response
# Create your views here.


class TokenViewSet(viewsets.ModelViewSet):
    queryset = TokenSerializer.Meta.model.objects.all()
    serializer_class = TokenSerializer
    permission_classes = IsAdminUser


class TokenEconomyViewSet(viewsets.ModelViewSet):
    queryset = TokenEconomySerializer.Meta.model.objects.all()
    serializer_class = TokenEconomySerializer

    def get_permissions(self):
        if self.action == "destroy":
            permission_classes = [IsAdminUser]
        else:
            permission_classes = [IsChild]
        return [permission() for permission in permission_classes]
    
    @action(detail=False , methods= ['put'], name="tokenEco-detail")
    def get_token_economy(self, request, user_id = None, game_id=None):
        user = Child.objects.get(user= user_id)
        game= Game.objects.get(pk=game_id)
        token = Token.objects.get(game=game)
        token_economy, _ = TokenEconomy.objects.get_or_create(user= user, token=token)
        token_economy.quantity = token_economy.quantity +1 
        token_economy.save()
        serializer = self.get_serializer(token_economy)
        return Response(serializer.data)

