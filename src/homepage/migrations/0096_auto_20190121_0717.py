# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-01-21 07:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0095_auto_20190119_1939'),
    ]

    operations = [
        migrations.AddField(
            model_name='destinationpackage',
            name='video_link',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='upcomingtrip',
            name='video_link',
            field=models.URLField(null=True),
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
        migrations.AlterField(
            model_name='grouppackagereview',
            name='destination_package',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='destinationpackagereview', to='homepage.Destinationpackage'),
        ),
    ]
