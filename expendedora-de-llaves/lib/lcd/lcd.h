
#ifndef LCD_H
#define LCD_H

#include <Arduino.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <motor_del_plato_principal.h>


extern LiquidCrystal_I2C lcd;

class LCD
{

public:
    void iniciar();
    void aulaRecibida(String aula);

};
#endif