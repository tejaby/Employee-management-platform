import re


def calcular_operacion(cadena):

    cadena = cadena.replace(" ", "")

    numeros = re.findall(r'\d+\.?\d*', cadena)
    operadores = re.findall(r'[\+\-\*\/]', cadena)

    if len(numeros) == 0 or len(operadores) == 0 or len(numeros) != len(operadores) + 1:
        return "Error: Formato de cadena inválido"

    resultado = float(numeros[0])
    for i in range(len(operadores)):
        operador = operadores[i]
        numero = float(numeros[i + 1])

        if operador == '+':
            resultado += numero
        elif operador == '-':
            resultado -= numero
        elif operador == '*':
            resultado *= numero
        elif operador == '/':
            if numero == 0:
                return "Error: División entre cero"
            resultado /= numero

    return resultado


cadena = input("ingrese operacion")
resultado = calcular_operacion(cadena)
print("Resultado:", resultado)
