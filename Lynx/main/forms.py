from django import forms
from .models import Playlist

class PlaylistForm(forms.ModelForm):
  '''  name = forms.CharField(label = 'Playlist name', max_length=30)
    author = forms.CharField(max_length=30)
    img = forms.CharField(max_length=30)'''
  class Meta:
    model = Playlist
    fields = ['name', 'author']
    widgets = {
      'name': forms.TextInput(attrs={'class': 'form_input'}),
      'author': forms.TextInput(attrs={'class': 'form_input'})
    }
    #fields = '__all__'


  def save(self):
    new_playlist = Playlist.objects.create(
      name = self.cleaned_data['name'],
      author = self.cleaned_data['author'],
      img = self.cleaned_data['img']
    )

    return new_playlist