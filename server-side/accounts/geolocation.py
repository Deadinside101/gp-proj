from django.shortcuts import render
import requests
# Create your views here.


class GeoLocation:
    API_KEY = "0a3606e739164c28942c1d955b2baa6e"
    API_URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY

    @staticmethod
    def find_user_ip(request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')

        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')

        return ip 

    @staticmethod
    def get_location(ip=None):
        if ip:
            response = requests.get(GeoLocation.API_URL + "&ip_address=" + ip)
        else:
            response = requests.get(GeoLocation.API_URL)
        
        return response.content