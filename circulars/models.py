from django.db import models
# Create your models here.

# add this
class Circulars(models.Model):
  title = models.CharField(max_length=36)
  description = models.TextField(max_length=50)
  date = models.DateField()
  PDF = models.FileField(upload_to='files/pdfs',default='false')
  general = models.BooleanField(default=False)
  everyone = models.BooleanField(default=False)
  student = models.BooleanField(default=False)
  faculty = models.BooleanField(default=False)
  Btech = models.BooleanField(default=False)
  Mtech = models.BooleanField(default=False)
  PHD = models.BooleanField(default=False)
  
  def _str_(self):
    return self.title