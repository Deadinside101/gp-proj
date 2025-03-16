# Generated by Django 4.1.7 on 2023-06-02 19:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0002_alter_child_parent"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="child",
            name="id",
        ),
        migrations.RemoveField(
            model_name="parent",
            name="id",
        ),
        migrations.RemoveField(
            model_name="specialist",
            name="id",
        ),
        migrations.AlterField(
            model_name="child",
            name="user",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                primary_key=True,
                related_name="child",
                serialize=False,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="parent",
            name="user",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                primary_key=True,
                related_name="parent",
                serialize=False,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="specialist",
            name="user",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                primary_key=True,
                related_name="specialist",
                serialize=False,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
