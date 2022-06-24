from django.urls import path, include
from . import views

urlpatterns = [
  path('', views.login),
  path('login', views.login),
  path('library', views.library)
]

