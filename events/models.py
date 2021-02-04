from django.db import models
# Create your models here.

# add this
class Events(models.Model):
  title = models.CharField(max_length=36)
  description = models.TextField(max_length=50)
  pic1 = models.ImageField(upload_to='files/images')
  pic2 = models.ImageField(upload_to='files/images')
  pic3 = models.ImageField(upload_to='files/images')
  pic4 = models.ImageField(upload_to='files/images')
  pic5 = models.ImageField(upload_to='files/images')
  pic6 = models.ImageField(upload_to='files/images')
  pic7 = models.ImageField(upload_to='files/images')
  pic8 = models.ImageField(upload_to='files/images')

  def _str_(self):
    return self.title