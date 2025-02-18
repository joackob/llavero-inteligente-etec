#include <Arduino.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <motor_del_plato_principal.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

class LCD
{
private:
    /* data */

public:
    void iniciarLCD();
    void aulaRecibida(String aula);

public:
    LCD();
    LCD();
};
