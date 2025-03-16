import numpy as np
import cv2
from mtcnn import MTCNN
from keras.models import load_model
from keras.applications.mobilenet import preprocess_input
from PIL import Image 
from io import BytesIO


model = load_model("emotion_FER.h5")
classes = ['anger', 'happy', 'neutral', 'sadness', 'surprise']
detector = MTCNN()
class Emotion:
    def __init__(self, bytes_img):
        np_img = np.array(Image.open(BytesIO(bytes_img.read())))
        gray_img = Image.fromarray(np_img).convert('L')
        self.image = np.stack((gray_img,) * 3, axis=-1)
       
    def predict(self):
        face = detector.detect_faces(self.image)
        x, y, width, height = face[0]['box']
        face = self.image[y:y+height, x:x+width]
        face = cv2.resize(face, (224, 224), interpolation=cv2.INTER_LINEAR)
        prediction = model.predict(preprocess_input(face).reshape(1, 224, 224, -1))
        id = np.argmax(prediction, axis=1)[0]
        return classes[id]
    
