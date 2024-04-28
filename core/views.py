from django.shortcuts import render

# Create your views here.
def home(request):
	return render(request,'index.html')
def bmi(request):
	return render(request,'bmi.html')
def calorie(request):
	return render(request,'calorie.html')
def blog(request):
	return render(request,'blog.html')
def reviews(request):
	return render(request,'reviews.html')