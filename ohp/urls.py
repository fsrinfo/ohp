from django.conf.urls import patterns, include, url

from rest_framework import viewsets, routers

from wall.models import Post

from django.contrib import admin
admin.autodiscover()

class PostViewSet(viewsets.ModelViewSet):
    model = Post

router = routers.DefaultRouter()
router.register(r'post',PostViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'ohp.views.home', name='home'),
    # url(r'^ohp/', include('ohp.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    
    url(r'^api/', include(router.urls)),
    
    url(r'^wall/$', 'wall.views.show_wall'),
)