from rest_framework import viewsets
from rest_framework.response import Response

from .models import Game, GameLog
from .permissions import AllowAny, IsAdminUser, IsChild, IsChildOwner
from .serializers import GameLogSerializer, GameSerializer
from accounts.models import Child
from rest_framework.decorators import action

# Create your views here.
class GameViewSet(viewsets.ModelViewSet):
    serializer_class = GameSerializer
    queryset = Game.objects.all()
    permission_classes = [IsAdminUser]


class GameLogViewSet(viewsets.ModelViewSet):
    serializer_class = GameLogSerializer
    queryset = GameLog.objects.all()

    def get_permissions(self):
        if self.action == "list" or self.action == "retrive":
            permission_classes = [AllowAny]
        elif self.action == "destroy":
            permission_classes = [IsAdminUser]
        elif self.action == "create":
            permission_classes = [IsChild]
        else:
            permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]
    
    @action(detail=False , methods= ['get'], name="gamelog-detail")
    def get_log(self, request, user_id = None, game_id=None):
        child = Child.objects.get(user= user_id)
        game= Game.objects.get(pk=game_id)
        log, _ = GameLog.objects.get_or_create(player= child, game=game)
        serializer = self.get_serializer(log)
        return Response(serializer.data)
