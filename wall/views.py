from django.shortcuts import render_to_response
from django.template import RequestContext


# Create your views here.
def show_wall(request):
	return render_to_response('wall.html', context_instance=RequestContext(request))

def show_ads(request):
	ads = [{"path": "blu", "type": "video"}]
	return render_to_response('ads.html', {"ads": ads}, context_instance=RequestContext(request))