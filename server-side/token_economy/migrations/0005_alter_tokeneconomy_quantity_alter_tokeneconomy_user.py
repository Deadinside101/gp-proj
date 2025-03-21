# Generated by Django 4.1.7 on 2023-04-29 22:58

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0002_alter_child_parent"),
        ("token_economy", "0004_alter_tokeneconomy_user"),
    ]

    operations = [
        migrations.AlterField(
            model_name="tokeneconomy",
            name="quantity",
            field=models.IntegerField(
                validators=[django.core.validators.MinValueValidator(0)]
            ),
        ),
        migrations.AlterField(
            model_name="tokeneconomy",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="user_economy",
                to="accounts.child",
            ),
        ),
    ]
