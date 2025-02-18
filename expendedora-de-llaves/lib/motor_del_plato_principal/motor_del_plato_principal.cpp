#include "motor_del_plato_principal.h"
#include <Arduino.h>

void MotorDelPlatoPrincipal::girar()
{
    analogWrite(PIN_MOTOR_VERDE, VELOCIDAD_RECOMENDADA);
    digitalWrite(PIN_MOTOR_NARANJA, LOW);
    digitalWrite(PIN_MOTOR_AZUL, HIGH);
}

void MotorDelPlatoPrincipal::girarEnReversa()
{
    analogWrite(PIN_MOTOR_VERDE, VELOCIDAD_RECOMENDADA);
    digitalWrite(PIN_MOTOR_NARANJA, HIGH);
    digitalWrite(PIN_MOTOR_AZUL, LOW);
}
void MotorDelPlatoPrincipal::detener()
{
    digitalWrite(PIN_MOTOR_NARANJA, LOW);
    digitalWrite(PIN_MOTOR_AZUL, LOW);
}