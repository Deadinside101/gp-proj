from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models
from accounts.models import Child
from games.models import Game

# Create your models here.
User = settings.AUTH_USER_MODEL


class Token(models.Model):
    token = models.ImageField(upload_to="tokens")
    name = models.CharField(max_length=50)
    description = models.TextField()
    game = models.OneToOneField(Game, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class TokenEconomy(models.Model):
    user = models.ForeignKey(
        Child, on_delete=models.CASCADE, related_name="user_economy"
    )
    token = models.ForeignKey(Token, on_delete=models.CASCADE)
    quantity = models.IntegerField(default= 0 , validators=[MinValueValidator(0)])

    class Meta:
        unique_together = (("user", "token"),)

    def __str__(self) -> str:
        return f"{self.token.name}"
