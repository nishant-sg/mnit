from rest_framework import serializers
from .models import Events

class EventsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Events
    fields = ('id', 'title', 'description', 'pic1','pic2','pic3','pic4','pic5','pic6','pic7','pic8')