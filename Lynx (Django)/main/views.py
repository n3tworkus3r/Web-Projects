from django.shortcuts import render
from .models import Playlist

def home(request):
  return render(request, 'main/home.html')

def login(request):
  return render(request, 'main/login.html')

def library(request):
  track_list = ['1', '2', '3', '4']
  return render(request, 'main/library.html', context={'track_list': track_list})

def playlists(request):
  playlists = Playlist.objects.all()
  return render(request, 'main/playlists.html', context={'playlists': playlists})

def player(request):
  return render(request, 'main/player.html')

