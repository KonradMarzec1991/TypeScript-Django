import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType

from .models import Article


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article

    authors = graphene.List(UserType)

    @staticmethod
    def resolve_authors(article, info):
        return article.authors.all()


class Query(graphene.ObjectType):
    all_articles = graphene.List(ArticleType)

    def resolve_all_articles(self, info):
        return Article.objects.all()
