#include "logger.h"

#define VELOCIDAD_DE_TRANSMISION_EN_BITS_POR_SEGUNDO 9600

Logger::Logger() {}
Logger::~Logger() {}

void Logger::configurar() {
  Serial.begin(VELOCIDAD_DE_TRANSMISION_EN_BITS_POR_SEGUNDO);
  delay(10);
}

void Logger::informar(const char *mensaje) { Serial.println(mensaje); }

void Logger::informar(String mensaje) { Serial.println(mensaje); }
