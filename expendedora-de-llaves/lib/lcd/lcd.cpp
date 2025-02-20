

#include <Arduino.h>
#include <Wire.h>
#include <lcd.h>
#include <LiquidCrystal_I2C.h>
#include <motor_del_plato_principal.h>



LiquidCrystal_I2C lcd(0x27, 16, 2);  // Initialize it here

void LCD::iniciar()
{
    lcd.init();
    lcd.backlight();
    lcd.print("Llavero ETEC-UBA");
}

void LCD::aulaRecibida(String aula)
{
    if (aula != "")
    {
        lcd.setCursor(0, 1);
        lcd.print("Recibí: ");
        lcd.print(aula);
    }
}
