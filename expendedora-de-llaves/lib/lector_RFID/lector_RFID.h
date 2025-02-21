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
byte nuidPICC[4] = { 0, 0, 0, 0 };  // Array para almacenar el UID de la tarjeta RFID
MFRC522::MIFARE_Key key;             // Variable para la clave MIFARE
MFRC522 rfid(SS_PIN, RST_PIN);       // Inicializa el lector RFID

MFRC522::StatusCode status;



class lector_RFID
{
    public:
        void iniciar();
        void configurar();
        bool encontrarAula(String aula);
        bool hayTagRFID();
        void leerDatorDeBloque(int bloque, byte datos[]);
};

#endif