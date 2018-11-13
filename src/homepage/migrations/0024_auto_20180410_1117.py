# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-04-10 11:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0023_auto_20180409_1238'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rental',
            name='associated_adventure_package',
        ),
        migrations.AlterField(
            model_name='destinationimage',
            name='destination',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='destinationimages', to='homepage.Destinationpackage'),
        ),
        migrations.AlterField(
            model_name='itenary',
            name='details',
            field=tinymce.models.HTMLField(),
        ),
    ]
