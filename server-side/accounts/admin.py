from django.contrib import admin

from .models import Child, CustomUser, Parent, Specialist

# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ("username", "is_staff", "is_superuser")


admin.site.register(Parent)
admin.site.register(Specialist)
admin.site.register(Child)
admin.site.register(CustomUser, UserAdmin)
