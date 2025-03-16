from rest_framework_nested import routers
from django.urls import path
from .views import ChildViewSet, ParentViewSet, SpecialistViewSet ,UserViewSet, BlacklistTokenUpdateView
from reviews.views import ReviewViewSet
from appointments.views import AppointmentViewSet

router = routers.DefaultRouter()
router.register("parent", ParentViewSet)
router.register("specialist", SpecialistViewSet)
router.register("child", ChildViewSet)
router.register("user", UserViewSet)

parent_router = routers.NestedDefaultRouter(
    router, "parent", lookup="parent"
)
specialist_router = routers.NestedDefaultRouter(
    router, "specialist", lookup="specialist"
)
specialist_router.register("reviews", ReviewViewSet, basename="specialist-review")
specialist_router.register("appointments",AppointmentViewSet, basename="specialist_appointment")
parent_router.register("appointments",AppointmentViewSet, basename="parent_appointment")

urlpatterns = [ *router.urls,
                *specialist_router.urls ,
                *parent_router.urls, 
                path('logout/blacklist/', BlacklistTokenUpdateView.as_view())
                ]
