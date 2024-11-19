#include "indicador_led.h"

#include <Arduino.h>

#define PIN_DEL_INDICADOR_LED 2
#define DELAY_TEMPORAL_AL_PARPADEAR 100

IndicadorLed::IndicadorLed() {}
IndicadorLed::~IndicadorLed() {}

void IndicadorLed::configurar() { pinMode(PIN_DEL_INDICADOR_LED, OUTPUT); }

void IndicadorLed::parpadear() {
  digitalWrite(PIN_DEL_INDICADOR_LED, HIGH);
  delay(DELAY_TEMPORAL_AL_PARPADEAR);
  digitalWrite(PIN_DEL_INDICADOR_LED, LOW);
  delay(DELAY_TEMPORAL_AL_PARPADEAR);
}

void IndicadorLed::prender() { digitalWrite(PIN_DEL_INDICADOR_LED, HIGH); }

void IndicadorLed::apagar() { digitalWrite(PIN_DEL_INDICADOR_LED, LOW); }
