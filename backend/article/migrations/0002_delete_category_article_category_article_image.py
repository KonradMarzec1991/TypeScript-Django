# Generated by Django 4.1.3 on 2022-11-11 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(blank=True, choices=[(1, 'History'), (2, 'Nature'), (3, 'Science'), (4, 'Philosophy'), (5, 'Political')], max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='files/images'),
        ),
    ]
