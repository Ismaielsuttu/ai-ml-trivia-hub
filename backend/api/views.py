from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_facts(request):
    ai_trivia = [
        {
            "id": 1, 
            "fact": "The term 'Machine Learning' was coined by Arthur Samuel in 1959 while at IBM."
        },
        {
            "id": 2, 
            "fact": "Python is the dominant language in AI because of libraries like TensorFlow and PyTorch."
        },
        {
            "id": 3, 
            "fact": "The first AI program was written in 1951 by Christopher Strachey to play checkers."
        },
        {
            "id": 4, 
            "fact": "A 'Neural Network' is designed to mimic the way the human brain creates connections."
        },
        {
            "id": 5, 
            "fact": "AlphaGo was the first computer program to defeat a professional human Go player."
        }
    ]
    return Response(ai_trivia)