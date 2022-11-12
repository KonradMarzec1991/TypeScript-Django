from django_filters import (
    CharFilter,
    ChoiceFilter,
    FilterSet
)

from .models import Article


class ArticleFilter(FilterSet):
    title = CharFilter(field_name="title", lookup_expr="istartswith")
    category = ChoiceFilter(field_name="category", choices=Article.CHOICES)
    authors = CharFilter(field_name="authors__username")

    class Meta:
        fields = ("title", "category", "authors")
        model = Article
