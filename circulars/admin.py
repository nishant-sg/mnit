from django.contrib import admin
from .models import Circulars 

class CircularAdmin(admin.ModelAdmin):  
  list_display = ('title', 'description', 'date','PDF','general','everyone','student','faculty','Btech','Mtech','PHD') 

# Register your models here.
admin.site.register(Circulars, CircularAdmin) 