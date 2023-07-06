# django
from django.urls import re_path, include

# rest_framework
from rest_framework.routers import DefaultRouter

# viewsets
from api import viewsets

router = DefaultRouter()
router.register(r'empleados', viewsets.EmpleadosViewSet, basename='EmpleadosViewSet')

urlpatterns = [
    re_path('api/', include(router.urls)),
    re_path('api-auth/', include('rest_framework.urls')),
]