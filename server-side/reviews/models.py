from django.conf import settings
from django.db import models
from django.db.models.manager import BaseManager
from accounts.models import Specialist, Parent

# Create your models here.


class Review(models.Model):
    user = models.ForeignKey(
        Parent, on_delete=models.CASCADE, blank=True, null=True, related_name="reviews"
    )
    reviewed_user = models.ForeignKey(
        Specialist,
        on_delete=models.CASCADE,
        related_name="reviews",
        null=True,
        blank=True,
    )
    ONE_STAR, TWO_STARS, THREE_STARS, FOUR_STARS, FIVE_STARS = 1, 2, 3, 4, 5
    RATE_CHOICES = [
        (ONE_STAR, "1 star"),
        (TWO_STARS, "2 stars"),
        (THREE_STARS, "3 stars"),
        (FOUR_STARS, "4 stars"),
        (FIVE_STARS, "5 stars"),
    ]
    rating = models.IntegerField(choices=RATE_CHOICES, default=FIVE_STARS)
    comment = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = (("user", "reviewed_user"),)

    def __str__(self) -> str:
        return f"{self.user} ({self.reviewed_user}): {self.comment[:50]}..."
