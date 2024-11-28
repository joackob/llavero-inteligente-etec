#ifndef LOGGER_H
#define LOGGER_H

#include <Arduino.h>

class Logger {
 public:
  Logger() {};
  ~Logger() {};

 public:
  Logger &configurar() {
    Serial.begin(115200);
    delay(100);
    return *this;
  };
  Logger &informar(const char *mensaje) {
    Serial.print(mensaje);
    return *this;
  };
  Logger &informar(int mensaje) {
    Serial.print(mensaje);
    return *this;
  };
  Logger &agregar(const char *mensaje) {
    Serial.print(mensaje);
    return *this;
  };
  Logger &agregar(int mensaje) {
    Serial.print(mensaje);
    return *this;
  };
  Logger &concluir() {
    Serial.println();
    return *this;
  };
};

#endif  // !DEBUG