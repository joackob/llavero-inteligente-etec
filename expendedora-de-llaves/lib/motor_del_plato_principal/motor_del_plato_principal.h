#ifndef CONEXION_MOTOR_PLATO_GENERAL_H
#define CONEXION_MOTOR_PLATO_GENERAL_H

#include <Arduino.h>

#define PIN_MOTOR_AZUL 25
#define PIN_MOTOR_VERDE 33
#define PIN_MOTOR_NARANJA 26
#define MOTOR_VELOCIDAD_MAXIMA 255
#define VELOCIDAD_RECOMENDADA 128

class MotorDelPlatoPrincipal
{
private:
    /* data */
public:
    MotorDelPlatoPrincipal() {};
    ~MotorDelPlatoPrincipal() {};

public:
    void girar()
    {
        analogWrite(PIN_MOTOR_VERDE, VELOCIDAD_RECOMENDADA);
        digitalWrite(PIN_MOTOR_NARANJA, LOW);
        digitalWrite(PIN_MOTOR_AZUL, HIGH);
    }

    void girarEnReversa()
    {
        analogWrite(PIN_MOTOR_VERDE, VELOCIDAD_RECOMENDADA);
        digitalWrite(PIN_MOTOR_NARANJA, HIGH);
        digitalWrite(PIN_MOTOR_AZUL, LOW);
    }
    void detener()
    {
        digitalWrite(PIN_MOTOR_NARANJA, LOW);
        digitalWrite(PIN_MOTOR_AZUL, LOW);
    }
};

#endif