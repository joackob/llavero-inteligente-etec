#include "motor_del_plato_principal.h"
#include <Arduino.h>

void loop()
{
    girarMotor(MOTOR_VELOCIDAD_MAXIMA);
    delay(1000);

}

void girarMotor(int Velocidad)
{
    analogWrite(PIN_MOTOR_VERDE, Velocidad);
    digitalWrite(PIN_MOTOR_NARANJA, LOW);
    digitalWrite(PIN_MOTOR_AZUL, HIGH);
}

void girarMotorReversa(int Velocidad)
{
    analogWrite(PIN_MOTOR_VERDE, Velocidad);
    digitalWrite(PIN_MOTOR_NARANJA, HIGH);
    digitalWrite(PIN_MOTOR_AZUL, LOW);
}
void detenerMotor()
{
    digitalWrite(PIN_MOTOR_NARANJA, LOW);
    digitalWrite(PIN_MOTOR_AZUL, LOW);
}