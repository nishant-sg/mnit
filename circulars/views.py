from django.shortcuts import render
from rest_framework import viewsets      
from .serializers import CircularsSerializer  
from .models import Circulars                 

class CircularsView(viewsets.ModelViewSet):   
  serializer_class = CircularsSerializer      
  queryset = Circulars.objects.all()          