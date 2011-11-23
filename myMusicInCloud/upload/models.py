from django.db import models

class user(models.Model):
    userName = models.CharField(max_length=256)

class station(models.Model):
    user = models.ForeignKey('user')
    station = models.CharField(max_length=256)

     



