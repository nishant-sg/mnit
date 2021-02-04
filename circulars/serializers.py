from rest_framework import serializers
from .models import Circulars

class CircularsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Circulars
    fields = ('id', 'title', 'description', 'date','PDF','general','everyone','student','faculty','Btech','Mtech','PHD')