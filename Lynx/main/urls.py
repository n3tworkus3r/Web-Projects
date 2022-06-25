from django.urls import path, include
from .views import *

urlpatterns = [
  path('', login),
  path('home', home),
  path('login', login),
  path('player', player),
  path('library', library),


  path('playlists', playlists),
  path('add_playlist', add_playlist),


  path('playlists/<str:id>/', playlist)
]

