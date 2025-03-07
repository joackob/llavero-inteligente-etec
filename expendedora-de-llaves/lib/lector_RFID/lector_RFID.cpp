#include <lector_RFID.h>
#include <MFRC522.h>
#include <Arduino.h>
#include <motor_del_plato_principal.h>
#include <SPI.h>

extern MotorDelPlatoPrincipal motor;

byte nuidPICC[4] = { 0, 0, 0, 0 };  // Array para almacenar el UID de la tarjeta RFID
MFRC522::MIFARE_Key key;             // Variable para la clave MIFARE
MFRC522 rfid(SS_PIN, RST_PIN);       // Inicializa el lector RFID

MFRC522::StatusCode status;

void lector_RFID::iniciar()
{
    SPI.begin();
    for (byte i = 0; i < 6; i++) {
      key.keyByte[i] = 0xFF;  // Establecer clave predeterminada
    }
    rfid.PCD_Init();  // Inicializar el lector RFID
    Serial.print(F("Reader: "));
    rfid.PCD_DumpVersionToSerial();
  
}

bool lector_RFID::hayTagRFID() {
    if (!rfid.PICC_IsNewCardPresent()) return false;
    Serial.println("hola");
    return rfid.PICC_ReadCardSerial();
  }
  

bool lector_RFID::encontrarAula(String aula) 
{
    Serial.print("Buscando: ");
    Serial.println(aula);
  
    motor.girar();  // Girar el motor para buscar el aula
    int contadorVueltas = 0;
  
    while (true) {
      Serial.println("buscando: ");
      while (!hayTagRFID());  // Esperar hasta que se detecte un RFID
  
      byte datosLeidos[TAMANO_BUFFER_RFID];
      leerDatosDeBloque(NUMERO_DE_BLOQUE_RFID, datosLeidos);  // Leer datos del RFID
//      cerrarComunicacionRFID(); //no le veo utilidad
  
      String datosLeidosString = String((char*)datosLeidos);
      String datosRecortados = datosLeidosString.substring(0, 8);
  
      if (datosRecortados.equals("inicio  ")) {
        contadorVueltas++;
        if (contadorVueltas == 2) {
          motor.detener();
          return false;
        }
      } else if (aula.equals(datosRecortados)) {
        motor.detener();
        return true;
      }
    }
    motor.detener();
    return false;
  }

void lector_RFID::leerDatosDeBloque(int bloque, byte datos[]) 
{
    byte bufferLen = TAMANO_BUFFER_RFID;
    status = rfid.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, bloque, &key, &rfid.uid);
  
    if (status != MFRC522::STATUS_OK) {
      Serial.print(F("Error de autenticación: "));
      Serial.println(rfid.GetStatusCodeName(status));
      return;
    }
  
    status = rfid.MIFARE_Read(bloque, datos, &bufferLen);
    if (status != MFRC522::STATUS_OK) {
      Serial.print(F("Error al leer el bloque: "));
      Serial.println(rfid.GetStatusCodeName(status));
    }
  }

void lector_RFID::configurar()
{

    byte nuidPICC[4] = {0, 0, 0, 0};
    MFRC522::MIFARE_Key key;
    MFRC522 rfid(SS_PIN, RST_PIN);
}
void lector_RFID::esperarRetiroDeLlave() {
  if (rfid.PICC_IsNewCardPresent()) {
    rfid.PICC_ReadCardSerial();
    Serial.println("Llave retirada");
  }
}