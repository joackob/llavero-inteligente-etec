#ifndef INDICATOR_H
#define INDICATOR_H

#include <Arduino.h>

//Indicaciones de pines
#define PIN_DEL_INDICADOR_LED 2
#define DELAY_DEL_INDICADOR_AL_PARPADEAR 100

class IndicadorLed {
 public:
  IndicadorLed() {};
  ~IndicadorLed() {};

  //Controla el led mediante los pines
 public:
  void configurar() { pinMode(PIN_DEL_INDICADOR_LED, OUTPUT); };
  void prender() { digitalWrite(PIN_DEL_INDICADOR_LED, HIGH); };
  void apagar() { digitalWrite(PIN_DEL_INDICADOR_LED, LOW); };
  void parpadear() {
    digitalWrite(PIN_DEL_INDICADOR_LED, HIGH);
    delay(DELAY_DEL_INDICADOR_AL_PARPADEAR);
    digitalWrite(PIN_DEL_INDICADOR_LED, LOW);
    delay(DELAY_DEL_INDICADOR_AL_PARPADEAR);
  };
};

#endif  // !DEBUG