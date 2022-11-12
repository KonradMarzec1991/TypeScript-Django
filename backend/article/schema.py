import graphene
from django.contrib.auth import get_user_model
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .filters import ArticleFilter
from .models import Article
from graphql_relay import to_global_id


class UserNode(DjangoObjectType):
    class Meta:
        model = get_user_model()


class ArticleNode(DjangoObjectType):
    class Meta:
        model = Article
        filterset_class = ArticleFilter
        interfaces = (relay.Node, )


class Query(graphene.ObjectType):
    article = relay.Node.Field(ArticleNode)
    all_articles = DjangoFilterConnectionField(ArticleNode, required=False)
