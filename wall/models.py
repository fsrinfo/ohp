from django.db import models
from django.contrib import admin

class Post(models.Model):
	username = models.CharField(max_length=50)
	text = models.TextField()
	datetime = models.DateTimeField(auto_now_add=True)

admin.site.register(Post)