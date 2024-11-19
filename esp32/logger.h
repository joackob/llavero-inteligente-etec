#ifndef LOGGER_H
#define LOGGER_H

#include <Arduino.h>

class Logger {
 public:
  Logger();
  ~Logger();
  void configurar();
  void informar(const char *);
  void informar(String);

 private:
};

#endif  // !DEBUG
