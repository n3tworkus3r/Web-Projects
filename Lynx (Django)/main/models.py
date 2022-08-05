from django.db import models

class Playlist(models.Model):
  id = models.BigAutoField(primary_key=True)
  name = models.CharField(max_length=30, db_index=True)
  author = models.CharField(max_length=30, db_index=True)
  time_length = models.DurationField()
  upload_date = models.DateField()
  rating = models.IntegerField()

  def __str__(self):
    return '{}',format(self.name)

