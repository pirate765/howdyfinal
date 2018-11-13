# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-04-13 10:07
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0026_auto_20180411_0645'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('logo', models.CharField(max_length=200)),
                ('head_description', models.TextField(max_length=200)),
                ('date_published', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=200)),
                ('description', tinymce.models.HTMLField()),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='article_posts', to='homepage.Article')),
            ],
        ),
        migrations.AlterField(
            model_name='destinationimage',
            name='destination',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='destinationimages', to='homepage.Destinationpackage'),
        ),
    ]
