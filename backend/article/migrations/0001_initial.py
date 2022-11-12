# Generated by Django 4.1.3 on 2022-11-12 19:13

from django.conf import settings
from django.db import migrations, models
import model_utils.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('uuid', model_utils.fields.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=255)),
                ('image', models.ImageField(blank=True, null=True, upload_to='articles/')),
                ('category', models.CharField(blank=True, choices=[('HISTORY', 'History'), ('NATURE', 'Nature'), ('SCIENCE', 'Science'), ('PHILOSOPHY', 'Philosophy'), ('POLITICAL', 'Political')], max_length=15, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('authors', models.ManyToManyField(related_name='articles', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Article',
                'verbose_name_plural': 'Articles',
                'ordering': ('-created_at',),
            },
        ),
    ]
