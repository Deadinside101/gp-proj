from rest_framework.routers import SimpleRouter
from .views import TokenEconomyViewSet
from django.urls import path 

router = SimpleRouter()
router.register("token-economy", TokenEconomyViewSet)
urlpatterns = router.urls

urlpatterns = router.urls + [
    path('token-economy/get_token_economy/<int:user_id>/<int:game_id>/', TokenEconomyViewSet.as_view({'get': 'get_token_economy'}), name='tokenEco-detail'),
]