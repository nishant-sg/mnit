from django.contrib import admin
from .models import Faculties 

class FacultiesAdmin(admin.ModelAdmin):  
  list_display = ('name', 'department', 'pic1','qualification','contact','achievments') 

# Register your models here.
admin.site.register(Faculties, FacultiesAdmin) 