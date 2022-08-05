from django.urls import path, include
from . import views

urlpatterns = [
  path('', views.login),
  path('home', views.home),
  path('login', views.login),
  path('player', views.player),
  path('library', views.library),
  path('playlists', views.playlists)
]

