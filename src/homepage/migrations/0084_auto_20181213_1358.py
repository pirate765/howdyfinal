# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-12-13 13:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0083_auto_20181213_1248'),
    ]

    operations = [
        migrations.CreateModel(
            name='Requiredgear',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', tinymce.models.HTMLField()),
            ],
        ),
        migrations.RemoveField(
            model_name='adventurepackage',
            name='required_gear',
        ),
        migrations.AlterField(
            model_name='addon',
            name='destination_package',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='addons', to='homepage.Destinationpackage'),
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
        migrations.AddField(
            model_name='requiredgear',
            name='required_gear',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='homepage.Adventurepackage'),
        ),
    ]