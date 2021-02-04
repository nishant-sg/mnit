from django.contrib import admin
from .models import Events 

class EventsAdmin(admin.ModelAdmin):  
  list_display = ('title', 'description', 'pic1','pic2','pic3','pic4','pic5','pic6','pic7','pic8') 

# Register your models here.
admin.site.register(Events, EventsAdmin) 