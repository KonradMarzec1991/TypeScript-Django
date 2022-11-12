import graphene
from django.contrib.auth import get_user_model
from graphene import relay
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from .filters import ArticleFilter
from .models import Article

import graphene


class ExtendedConnection(graphene.Connection):
    class Meta:
        abstract = True

    total_count = graphene.Int()
    edge_count = graphene.Int()

    def resolve_total_count(self, info, **kwargs):
        return self.length

    def resolve_edge_count(self, info, **kwargs):
        return len(self.edges)



class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class ArticleType(DjangoObjectType):
    class Meta:
        model = Article
        filterset_class = ArticleFilter
        interfaces = (relay.Node, )
        connection_class = ExtendedConnection


class Query(graphene.ObjectType):
    article = relay.Node.Field(ArticleType)
    all_articles = DjangoFilterConnectionField(ArticleType, required=False)
