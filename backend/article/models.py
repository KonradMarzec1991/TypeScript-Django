from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _


class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(models.Model):
    HISTORY = 1
    NATURE = 2
    SCIENCE = 3
    PHILOSOPHY = 4
    POLITICAL = 5

    CHOICES = (
        (HISTORY, _("History")),
        (NATURE, _("Nature")),
        (SCIENCE, _("Science")),
        (PHILOSOPHY, _("Philosophy")),
        (POLITICAL, _("Political")),
    )

    name = models.CharField(choices=CHOICES, max_length=15)

    def __str__(self):
        return self.name


class Article(TimeStampModel):
    title = models.CharField(max_length=255)
    authors = models.ManyToManyField(to=get_user_model(), related_name="articles")

    class Meta:
        verbose_name = "Article"
        verbose_name_plural = "Articles"

    def __str__(self):
        return self.title
