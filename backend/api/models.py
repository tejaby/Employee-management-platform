from django.db import models

# Create your models here.
class Empleados(models.Model):
    GENEROS = (
        (1, 'MASCULINO'),
        (2, 'FEMENINO'),
        (3, 'OTRO'),
    )

    nombre = models.CharField(null=False, blank=False, max_length=100)
    apellido = models.CharField(null=False, blank=False, max_length=100)
    salario_base = models.FloatField(null=False, blank=False)
    horas_trabajadas = models.FloatField(null=False, blank=False)
    dpi = models.CharField(null=False, blank=False, max_length=13)
    genero = models.SmallIntegerField(choices=GENEROS, null=False, blank=False)