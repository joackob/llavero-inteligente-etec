#include <lector_RFID.h>
#include <MFRC522.h>
#include <Arduino.h>
#include <motor_del_plato_principal.h>
#include <SPI.h>
#include <lcd.h>

extern MotorDelPlatoPrincipal motor;
extern LCD Lcd;

class pruebas_Llavero
{
    void probar_motor()
    {
        motor.girar();
        delay(1000);
        motor.girarEnReversa();
        delay(1000);
        motor.detener();
        delay(1000);
    }
    void probar_lcd()
    {
        lcd.init();
        lcd.backlight();
        lcd.print("El lcd funciona");
    }
    void probar_rfid_escritura();

    void prueba_rfid_lectura();
};
    