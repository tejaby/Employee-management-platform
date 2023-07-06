# rest framework
from rest_framework import serializers

# models
from api.models import Empleados

class EmpleadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleados
        fields = '__all__'
