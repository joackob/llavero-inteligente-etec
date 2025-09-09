#ifndef LOGGER_H
#define LOGGER_H

#include <Arduino.h>

//Que es un logger, yo creo que es el monitor serie (logger = algo que loggea)
class Logger {
 public:
  Logger() {};
  ~Logger() {};

 public:
 //Configura el monitor serie 
  Logger &configurar() {
    Serial.begin(115200);
    delay(100);
    return *this;
  };

  //Informa un mensaje recibido el cual se tiene que pasar como parametro.
  //(Puede informar tanto un CHAT o un INT)
  Logger &informar(const char *mensaje) {
    Serial.print(mensaje);
    return *this;
  };
  Logger &informar(int mensaje) {
    Serial.print(mensaje);
    return *this;
  };

  //falta posible desarrollo porque se parece mucho al logger.informar
  Logger &agregar(const char *mensaje) {
    Serial.print(mensaje);
    return *this;
  };
  Logger &agregar(int mensaje) {
    Serial.print(mensaje);
    return *this;
  };

  //Baja linea para terminar una oracion
  Logger &concluir() {
    Serial.println();
    return *this;
  };
};

#endif  // !DEBUG