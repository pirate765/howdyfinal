# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-03-28 04:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0002_itenary_destination'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='associated_adventures',
            field=models.ManyToManyField(blank=True, to='homepage.Adventure'),
        ),
        migrations.AlterField(
            model_name='trip',
            name='destination',
            field=models.ManyToManyField(blank=True, to='homepage.Destination'),
        ),
        migrations.AlterField(
            model_name='upcomingtrip',
            name='associated_adventures',
            field=models.ManyToManyField(blank=True, to='homepage.Adventure'),
        ),
        migrations.AlterField(
            model_name='upcomingtrip',
            name='destination',
            field=models.ManyToManyField(blank=True, to='homepage.Destination'),
        ),
    ]
