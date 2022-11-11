import graphene
from graphene_django import DjangoObjectType

from .models import Article


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article


class Query(graphene.ObjectType):
    all_articles = graphene.List(ArticleType)

    def resolve_all_articles(self, info):
        return Article.objects.all()
