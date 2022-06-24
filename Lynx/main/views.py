from django.shortcuts import render

def login(request):
  return render(request, 'main/login.html')

def library(request):
  track_list = ['1', '2', '3', '4']
  return render(request, 'main/library.html', context={'track_list': track_list})

def nav(request):
  return render(request, 'main/nav.html')