# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-03-28 08:40
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0003_auto_20180328_0451'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Trip',
            new_name='DestinationPackage',
        ),
    ]
