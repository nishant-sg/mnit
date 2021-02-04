from django.shortcuts import render
from rest_framework import viewsets      
from .serializers import EventsSerializer  
from .models import Events                 

class EventsView(viewsets.ModelViewSet):   
  serializer_class = EventsSerializer      
  queryset = Events.objects.all()          