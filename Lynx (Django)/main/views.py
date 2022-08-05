from django.shortcuts import render
from .models import Playlist
from .forms import PlaylistForm
from django.http import JsonResponse

########### SHOW TEMPLATES ###########
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

def playlist(request, id):
  playlist = Playlist.objects.get(id__iexact=id)
  return render(request, 'main/playlist.html',context={'playlist': playlist})

def player(request):
  return render(request, 'main/player.html')


########### CREATE OBJECTS ###########
def add_playlist(request):

  """  if request.method == 'POST':
      form = PlaylistForm()
      if form.is_valid():
        form.save()"""

  form = PlaylistForm()
  html_form = render_to_string('add_playlist.html', {'form': form}, request=request)
  #return render(request, 'main/add_playlist.html', {'form': form})
  return JsonResponse({'html_form':html_form})




class PlaylistCreate():
  def get(self, request):
    form = PlaylistForm()
    return render(request, 'main/add_playlist.html', context={'form': form})