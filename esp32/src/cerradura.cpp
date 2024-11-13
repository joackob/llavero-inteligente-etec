#include "cerradura.h"

#include <Arduino.h>

#define PIN_DEL_SERVOMOTOR 23

Cerradura::Cerradura() {}
Cerradura::~Cerradura() {}
void Cerradura::configurar() { this->servo.attach(PIN_DEL_SERVOMOTOR); }
void Cerradura::abrir() { this->servo.write(0); }
void Cerradura::cerrar() { this->servo.write(90); }
