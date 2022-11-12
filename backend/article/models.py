from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _
from model_utils.fields import UUIDField


class UUIDModel(models.Model):
    uuid = UUIDField(primary_key=True, version=4, editable=False)

    class Meta:
        abstract = True


class TimeStampModel(UUIDModel):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Article(TimeStampModel):
    GENERAL = "GENERAL"
    HISTORY = "HISTORY"
    NATURE = "NATURE"
    SCIENCE = "SCIENCE"
    PHILOSOPHY = "PHILOSOPHY"
    POLITICAL = "POLITICAL"

    CHOICES = (
        (HISTORY, _("History")),
        (NATURE, _("Nature")),
        (SCIENCE, _("Science")),
        (PHILOSOPHY, _("Philosophy")),
        (POLITICAL, _("Political")),
    )

    title = models.CharField(max_length=255)
    authors = models.ManyToManyField(to=get_user_model(), related_name="articles")
    image = models.ImageField(upload_to="articles/", null=True, blank=True)
    category = models.CharField(choices=CHOICES, max_length=15, null=True, blank=True)
    content = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Article"
        verbose_name_plural = "Articles"
        ordering = ("-created_at", )

    def __str__(self):
        return self.title
