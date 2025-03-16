from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from accounts.models import Child

# Create your models here.


class Game(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self) -> str:
        return self.name


class GameLog(models.Model):
    player = models.ForeignKey(Child, on_delete=models.CASCADE, related_name="player")
    game = models.ForeignKey(Game, on_delete=models.CASCADE, related_name="game")
    level = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(4)]
    )

    class Meta:
        unique_together = (("player", "game"),)
