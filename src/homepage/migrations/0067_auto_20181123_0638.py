# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-23 06:38
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0066_auto_20181122_0608'),
    ]

    operations = [
        migrations.AddField(
            model_name='howdystays',
            name='capacity_allowed',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='howdystays',
            name='price_deluxe_room',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='howdystays',
            name='price_suite_room',
            field=models.IntegerField(blank=True, null=True),
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
    ]
