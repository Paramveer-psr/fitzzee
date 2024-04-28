from django.urls import path
from . import views

urlpatterns = [
	path('/Disease-Predictor', views.diagnosis, name='diagnosis'),
]