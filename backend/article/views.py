from django_filters import rest_framework as filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import Article
from .filters import ArticleFilter
from .serializers import ArticleSerializer


class ArticleListView(ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ArticleFilter


class ArticleDetailView(RetrieveUpdateDestroyAPIView):
    lookup_url_kwarg = "pk"
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
