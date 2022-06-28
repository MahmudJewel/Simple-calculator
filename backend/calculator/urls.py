from django.urls import path, include
from calculator.views import CalculatorViews
urlpatterns = [
    path('calculate', CalculatorViews.as_view(), name='calculate'),
]