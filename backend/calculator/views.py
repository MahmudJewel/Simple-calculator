from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
# Create your views here.

class CalculatorViews(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, format=None):
        num_1=request.GET.get('num_1')
        num_2=request.GET.get('num_2')
        operator=request.GET.get('operator')
        result=0
        if num_1 is not None and num_2 is not None:
            num_1=float(num_1)
            num_2=float(num_2)
            if(operator=='add'):
                result=num_1 + num_2
            elif(operator=='sub'):
                result=num_1 - num_2
            elif(operator=='mul'):
                result=num_1 * num_2
            elif(operator=='div'):
                if num_2==0:
                    result='undefined'
                else:
                    result=num_1 / num_2
        
        # print('num-1 is: ', num_1)
        # print('num-2 is: ', num_2)
        # print('operator is: ', operator)
        return Response(result)