import graphene
from django.contrib.auth import get_user_model
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .filters import ArticleFilter
from .models import Article


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article
        filterset_class = ArticleFilter
        interfaces = (relay.Node, )


class Query(graphene.ObjectType):
    article = relay.Node.Field(ArticleType)
    all_articles = DjangoFilterConnectionField(ArticleType, required=False)
