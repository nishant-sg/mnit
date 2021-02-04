from django.shortcuts import render
from rest_framework import viewsets      
from .serializers import FacultiesSerializer  
from .models import Faculties                 

class FacultiesView(viewsets.ModelViewSet):   
  serializer_class = FacultiesSerializer      
  queryset = Faculties.objects.all()          