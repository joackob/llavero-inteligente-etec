#ifndef CONEXION_MOTOR_PLATO_GENERAL_H
#define CONEXION_MOTOR_PLATO_GENERAL_H

#include <Arduino.h>

//define los pines del Motor
#define PIN_MOTOR_AZUL 25
#define PIN_MOTOR_VERDE 33
#define PIN_MOTOR_NARANJA 26
#define MOTOR_VELOCIDAD_MAXIMA 255
#define VELOCIDAD_RECOMENDADA 128

class MotorDelPlatoPrincipal
{
private:
    /* data */ //yo supongo que aca se tendra que insertar data pero no se que?
public:
    MotorDelPlatoPrincipal() {};
    ~MotorDelPlatoPrincipal() {};

public:
    void configurarMotorAzul() {pinMode(PIN_MOTOR_AZUL, OUTPUT); };
    void configurarMotorVerde() {pinMode(PIN_MOTOR_VERDE, OUTPUT); };
    void configurarMotorNaranja() {pinMode(PIN_MOTOR_NARANJA, OUTPUT); }; 
    void girar();
    void girarEnReversa();
    void detener();


};

#endif