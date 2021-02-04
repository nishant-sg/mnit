from rest_framework import serializers
from .models import Faculties

class FacultiesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Faculties
    fields = ('id', 'name', 'department', 'pic1','qualification','contact','achievments')