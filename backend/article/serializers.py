from django.contrib.auth.models import User
from rest_framework import serializers

from article.models import Article


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name", "email"]


class ArticleSerializer(serializers.ModelSerializer):
    authors = AuthorSerializer(many=True)

    class Meta:
        model = Article
        fields = "__all__"
