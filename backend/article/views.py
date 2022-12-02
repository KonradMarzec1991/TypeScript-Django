from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import ArticleSerializer


class ArticleListView(APIView):
    def get(self, request, *args, **kwargs):
        pass

    def post(self, request, *args, **kwargs):
        pass


class ArticleDetailView(APIView):
    def get(self, request, pk, *args, **kwargs):
        pass

    def put(self, request, pk, *args, **kwargs):
        pass

    def delete(self, request, pk, *args, **kwargs):
        pass