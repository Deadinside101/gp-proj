# Generated by Django 4.1.7 on 2023-04-27 11:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0002_alter_child_parent"),
        ("token_economy", "0002_alter_token_game_alter_tokeneconomy_quantity"),
    ]

    operations = [
        migrations.AlterField(
            model_name="tokeneconomy",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="accounts.child"
            ),
        ),
    ]
