from rest_framework import viewsets, routers, serializers
from wall.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'text', 'datetime', 'username')

class PostViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all().reverse()
	serializer_class = PostSerializer
	
	
class AdsViewSet(viewsets.ModelViewSet):
	queryset = Post.objects.all().reverse()
	serializer_class = PostSerializer