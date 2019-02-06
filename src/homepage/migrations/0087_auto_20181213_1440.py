# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-12-13 14:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0086_auto_20181213_1429'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addon',
            name='destination_package',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='addons', to='homepage.Destinationpackage'),
        ),
        migrations.AlterField(
            model_name='adventurepackage',
            name='short_description',
            field=tinymce.models.HTMLField(),
        ),
        migrations.AlterField(
            model_name='destinationimage',
            name='destination',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='destinationimages', to='homepage.Destinationpackage'),
        ),
        migrations.AlterField(
            model_name='destinationpackagehighlights',
            name='destination',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='highlights', to='homepage.Destinationpackage'),
        ),
        migrations.AlterField(
            model_name='grouppackageitenerary',
            name='destination_package',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='destinationitinerary', to='homepage.Destinationpackage'),
        ),
    ]