#ifndef CONEXION_WIFI_H
#define CONEXION_WIFI_H

#include <WiFi.h>

using EventoAlIntentarConectarse = void (*)(const char *ssid_wifi);
using EventoAlConectarse = void (*)(WiFiClient &wifi);

class ConexionWiFi {
public:
  ConexionWiFi();
  ~ConexionWiFi();
  ConexionWiFi &intentarConectarseALaRed();

public:
  EventoAlIntentarConectarse alIntentarConectarse;
  EventoAlConectarse alConectarse;

private:
  WiFiClient wifi;
};

#endif
