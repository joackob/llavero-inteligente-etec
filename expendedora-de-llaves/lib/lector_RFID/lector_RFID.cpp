#include <lector_RFID.h>
#include <MFRC522.h>
#include <Arduino.h>

#define SS_PIN 5
#define RST_PIN 0

void lector_RFID::configurar()
{

    byte nuidPICC[4] = {0, 0, 0, 0};
    MFRC522::MIFARE_Key key;
    MFRC522 rfid(SS_PIN, RST_PIN);
}