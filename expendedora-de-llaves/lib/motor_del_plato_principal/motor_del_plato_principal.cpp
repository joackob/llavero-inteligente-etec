#include "motor_del_plato_principal.h"
#include <Arduino.h>

//Girar el motor, se ve que el PIN_VERDE hace girar a una velocidad, y los otros 2 el sentido
void MotorDelPlatoPrincipal::girar()
{
    Serial.println("girando");
    analogWrite(PIN_MOTOR_VERDE, VELOCIDAD_RECOMENDADA);
    digitalWrite(PIN_MOTOR_NARANJA, LOW);
    digitalWrite(PIN_MOTOR_AZUL, HIGH);
}

//
void MotorDelPlatoPrincipal::girarEnReversa()
{
    analogWrite(PIN_MOTOR_VERDE, VELOCIDAD_RECOMENDADA);
    digitalWrite(PIN_MOTOR_NARANJA, HIGH);
    digitalWrite(PIN_MOTOR_AZUL, LOW);
}

//Apaga los 2 pines para apagar el motor
void MotorDelPlatoPrincipal::detener()
{
    digitalWrite(PIN_MOTOR_NARANJA, LOW);
    digitalWrite(PIN_MOTOR_AZUL, LOW);
}