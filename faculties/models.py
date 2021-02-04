from django.db import models
# Create your models here.

# add this
class Faculties(models.Model):
  name = models.CharField(max_length=50)
  department = models.TextField(max_length=50)
  pic1 = models.ImageField(upload_to='files/images')
  qualification = models.TextField(max_length=50)
  contact = models.TextField(max_length=100)
  achievments = models.TextField(max_length=100)

  def _str_(self):
    return self.title