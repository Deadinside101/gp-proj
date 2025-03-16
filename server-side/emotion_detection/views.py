import numpy as np
import tensorflow as tf
import pandas as pd
from rest_framework.views import APIView
from django.http import HttpResponse
from .Facial_recognintion import Emotion
from rest_framework.response import Response
# Create your views here.

class EmotionDetectionView(APIView):
    def post(self, request):
        if request.FILES["image"]:
            file = request.FILES["image"]
            result = Emotion(file).predict()
            print(f"Model classification: {result}")
            return Response(result, status=200)
        return HttpResponse({"message": "Hello, world!"})
