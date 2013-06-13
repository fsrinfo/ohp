from django.conf.urls import patterns, include, url

from rest_framework import routers

from wall.viewsets import PostViewSet

from django.contrib import admin
admin.autodiscover()

router = routers.DefaultRouter()
router.register(r'post',PostViewSet)

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)), 
    url(r'^api/', include(router.urls)),
    url(r'^wall/$', 'wall.views.show_wall'),
    url(r'^ads/$', 'wall.views.show_ads'),
)
