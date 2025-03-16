from django.urls import path 
from .views import Detection 
urlpatterns = [
    path("detect" , Detection.as_view() , name="detect_autism")
]