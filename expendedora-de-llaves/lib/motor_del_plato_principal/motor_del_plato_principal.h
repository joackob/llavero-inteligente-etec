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
    void configurarMotorAzul() {pinMode(PIN_MOTOR_AZUL, OUTPUT); };
    void configurarMotorVerde() {pinMode(PIN_MOTOR_VERDE, OUTPUT); };
    void configurarMotorNaranja() {pinMode(PIN_MOTOR_NARANJA, OUTPUT); };   //inline definition
    void girar();
    void girarEnReversa();
    void detener();

    void prueba_motor()
    {
        girar();
        delay(1000);
        girarEnReversa();
        delay(1000);
        detener();
        delay(1000);
    }
};

#endif