# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext



def mainPage(request):
    return render_to_response('mainPage.html',RequestContext(request))

