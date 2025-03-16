from rest_framework import routers
from django.urls import path 
from .views import GameLogViewSet, GameViewSet

router = routers.SimpleRouter()
router.register("game", GameViewSet)
router.register("game-log", GameLogViewSet)

urlpatterns = router.urls + [
    path('game-log/get_log/<int:user_id>/<int:game_id>/', GameLogViewSet.as_view({'get': 'get_log'}), name='gamelog-get'),
]
