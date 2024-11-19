#ifndef CERRADURA_H
#define CERRADURA_H

#include <ESP32Servo.h>  //Kevin Harrington,John K. Bennett

class Cerradura {
 public:
  Cerradura();
  ~Cerradura();
  void configurar();
  void abrir();
  void cerrar();

 private:
  Servo servo;
};

#endif  // !DEBUG
