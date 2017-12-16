from django.db import models
from django.core.urlresolvers import reverse
# Create your models here.


class Query(models.Model):
    name     = models.CharField(max_length=50)
    email    = models.CharField(max_length=30)
    question = models.CharField(max_length=500)
    city     = models.CharField(max_length=20)

    def __str__(self):
        return self.name
