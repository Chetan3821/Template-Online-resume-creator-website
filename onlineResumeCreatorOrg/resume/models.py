from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class contact_info(models.Model):
    name = models.CharField(max_length=30,blank=False)
    email = models.EmailField(max_length=50,blank=False)
    subject = models.TextField(max_length=100,blank=False)
    message = models.TextField(max_length=1000,blank=False)