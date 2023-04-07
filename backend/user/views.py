# from django.shortcuts import render 
# from django.http import HttpResponse
from rest_framework import status 
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import RegistrationSerilizers


@api_view(['POST'],)
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerilizers(data=request.data)
        data = {}
        if serializer.is_valid():
            account =serializer.save()
            data['response'] = "seccesfuliy registered a new user "
            data['email'] = account.email
            data['username'] = account.username
        else:
            data = serializer.errors
        return Response(data)       


