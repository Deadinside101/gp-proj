import pandas as pd
import numpy as np
from keras.models import load_model


class Questionnaire_Model:
    def __init__(self, data):
        self.questions = [int( data.get("q1")), int( data.get("q2")), int( data.get("q3")),
                          int( data.get("q4")), int( data.get("q5")), int( data.get("q6")),
                          int( data.get("q7")), int( data.get("q8")), int( data.get("q9")),
                          int( data.get("q10"))]
        self.age =  int(data.get("age")) / 11
        self.gender = int( data.get("gender"))
        self.ethnicity =  data.get("ethnicity")
        self.jaundice = int( data.get("jaundice"))
        self.family_with_ASD = int( data.get("family_member_with_pdd"))
        self.user =  data.get("tester")
        self.app_used_before = int( data.get("used_before"))
        self.language =  data.get("language")
        self.score = sum(self.questions) / 10


    
    def Preprocessing(self):
        ethnicity_list = ['aboriginal', 'asian', 'black', 'hispanic', 'latino', 'middle eastern', 'others', 'south asians', 'white']
        language_list = ['arabic', 'english', 'french', 'mandarin', 'portuguese', 'russian', 'spanish', 'swahili', 'turkish', 'urdu']
        user_list = ['friend', 'health care professional', 'parent', 'relative', 'self', 'teacher']
        ethnicity = ethnicity_list.index(self.ethnicity) / 8
        language = language_list.index(self.language) / 9
        user = user_list.index(self.user) / 5

        df = {'A1': [self.questions[0]], 'A2':[self.questions[1]], 'A3':[self.questions[2]],
               'A4':[self.questions[3]], 'A5':[self.questions[4]], 'A6': [self.questions[5]], 'A7':[self.questions[6]],
                 'A8':[self.questions[7]], 'A9':[self.questions[8]], 'A10':[self.questions[9]],
           'Age': [self.age], 'Sex': [self.gender], 'Ethnicity' : [ethnicity], 'Jaundice ': [self.jaundice],
            'Family_ASD': [self.family_with_ASD], 'Used_App_Before': [self.app_used_before],
            'Score': [self.score], 'Language': [language], 'User': [user]}
        print(df)
        return pd.DataFrame(df)
    
    def predict(self):
        model = load_model("Questionnaire_Model.h5")
        row = self.Preprocessing()
        prediction = np.argmax(model.predict(row), axis = 1)[0]
        return bool(prediction)


