from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer


class ArticleListView(APIView):
    def get(self, request, *args, **kwargs):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        pass


class ArticleDetailView(APIView):
    def get(self, request, pk, *args, **kwargs):
        try:
            article = Article.objects.get(pk=pk)
        except Article.DoesNotExist:
            raise Http404

        serializer = ArticleSerializer(article)
        return Response(serializer.data, status.HTTP_200_OK)

    def put(self, request, pk, *args, **kwargs):
        pass

    def delete(self, request, pk, *args, **kwargs):
        pass