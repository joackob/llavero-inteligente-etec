#ifndef LECTOR_RFID_H
#define LECTOR_RFID_H

#include <MFRC522.h>
#include <Arduino.h>
#include <SPI.h>
// Definir pines de comunicación para el lector RFID
#define SS_PIN 5   // Pin de selección de esclavo (SS) como el pin 5
#define RST_PIN 0  // Pin de reinicio (RST) como el pin 0
#define NUMERO_DE_BLOQUE_RFID 1    // Número de bloque donde se guardan los datos en el tag RFID
#define TAMANO_BUFFER_RFID 18      // Tamaño del buffer de lectura (16 bytes + 2 bytes extra)



// Variables globales

class lector_RFID
{
    public:
        void iniciar();
        void configurar();
        bool encontrarAula(String aula);
        bool hayTagRFID();
        void leerDatosDeBloque(int bloque, byte datos[]);
        void esperarRetiroDeLlave();

};

#endif