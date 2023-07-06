# rest_framework
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from rest_framework.response import Response
from rest_framework import status

# models
from api.models import Empleados

# serializers
from api.serializers import EmpleadosSerializer


class EmpleadosViewSet(viewsets.ModelViewSet):
    serializer_class = EmpleadosSerializer
    queryset = Empleados.objects.all()
    lookup_field = "id"
    permission_classes = [AllowAny]

    def put(self, request, pk=None):
        """ Actualiza un objeto """
        return Response({'Method': 'PUT'})

    def patch(self, request, pk=None):
        """ Maneja actualizacion parcial de un objeto"""
        return Response({'Method': 'PATCH'})

    def delete(self, request, pk=None):
        """ Borrar objeto """
        return Response({'Method': 'DELETE'})
