#ifndef LCD_H
#define LCD_H

#include <Arduino.h>
#include <Wire.h>
#include <lcd.h>
#include <LiquidCrystal_I2C.h>
#include <motor_del_plato_principal.h>

MotorDelPlatoPrincipal motor;

bool encontrarAula(String aula)
{
    Serial.print("Buscando: ");
    Serial.println(aula);

    girar(VELOCIDAD_RECOMENDADA);
    int contadorVueltas = 0;

    while (true)
    {
        while (!hayTagRFID())

            byte datosLeidos[RFID_BUFFER_SIZE];
        leerDatosDeBloque(NUMERO_DE_BLOQUE_RFID, datosLeidos);
        cerrarComunicacionesRFID();

        String datosLeidosString = String((char *)datosLeidos);
        String datosRecortados = datosLeidosString.substring(0, 8);

        if (datosRecortados.equals("inicio   "))
        {
            contadorVueltas++;
            if (contadorVueltas == 2)
            {
                motor.detener();
                return false;
            }
        }
        else if (aula.equals(datosRecortados))
        {
            motor.detener();
            return true;
        }
    }
    motor.detener();
    return false;
}

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
        lcd.print("Llave servida");
        delay(200);
    }
}

#endif
