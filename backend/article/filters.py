from django.db.models import Q
from django_filters import (
    CharFilter,
    ChoiceFilter,
    FilterSet
)

from .models import Article


class ArticleFilter(FilterSet):
    search = CharFilter(method="search_filter")
    title = CharFilter(field_name="title", lookup_expr="istartswith")
    authors = CharFilter(field_name="authors__username")
    category = ChoiceFilter(choices=Article.CHOICES)

    class Meta:
        fields = ("title", "category", "authors")
        model = Article

    def search_filter(self, qs, name, value):
        if value:
            return qs.filter(
                Q(title__icontains=value) |
                Q(category__icontains=value) |
                Q(authors__username__icontains=value)
            )
        return qs
