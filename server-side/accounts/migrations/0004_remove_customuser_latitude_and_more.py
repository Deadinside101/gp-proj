# Generated by Django 4.1.7 on 2023-06-03 15:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0003_remove_child_id_remove_parent_id_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="customuser",
            name="latitude",
        ),
        migrations.RemoveField(
            model_name="customuser",
            name="longituide",
        ),
        migrations.AddField(
            model_name="customuser",
            name="address",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name="customuser",
            name="city",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name="customuser",
            name="country",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
