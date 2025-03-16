import numpy as np
import tensorflow as tf
import pandas as pd
import json
from .serializers import DetectorSerializer
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .questionnaire import Questionnaire_Model


class Detection(APIView):
    def post(self, request):
        json_data = request.body.decode('utf-8')
        data = json.loads(json_data)
        serializer = DetectorSerializer(data=data)
        if serializer.is_valid():
            questionnaire = Questionnaire_Model(serializer.data)
            prediction = questionnaire.predict()
            return HttpResponse(prediction, status=200)
    
        return HttpResponse("something is wrong" , status=500)
    


# {
#     "q1": true,
#     "q2": false,
#     "q3": true,
#     "q4": true,
#     "q5": false,
#     "q6": true,
#     "q7": false,
#     "q8": false,
#     "q9": true,
#     "q10": false,
#     "age": 10,
#     "gender": true,
#     "ethnicity": "asian",
#     "jaundice": false,
#     "family_member_with_pdd": true,
#     "tester": "parent",
#     "language": "arabic",
#     "used_before": true
# }
