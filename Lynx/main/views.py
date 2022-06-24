from django.shortcuts import render


def home(request):
  return render(request, 'main/home.html')

def login(request):
  return render(request, 'main/login.html')

def library(request):
  track_list = ['1', '2', '3', '4']
  return render(request, 'main/library.html', context={'track_list': track_list})

def playlists(request):
  return render(request, 'main/playlists.html')

def player(request):
  return render(request, 'main/player.html')