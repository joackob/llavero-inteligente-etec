#ifndef CONEXION_WIFI_H
#define CONEXION_WIFI_H

#include <WiFi.h>

#include "configuracion_wifi.h"

typedef struct {
  const char *ssid;
  bool conectado;
} InformacionSobreElEstadoDeLaConexionWiFi;

typedef void (*AccionAlConectarse)(
    InformacionSobreElEstadoDeLaConexionWiFi info);
typedef void (*AccionAlIntentarConectarse)(
    InformacionSobreElEstadoDeLaConexionWiFi info);

class ConexionWiFi : public WiFiClient {
 public:
  ConexionWiFi() {};
  ~ConexionWiFi() {};

 public:
  ConexionWiFi &alIntentarConectarse(AccionAlIntentarConectarse accion) {
    this->accionAlIntentarConectarse = accion;
    return *this;
  }
  ConexionWiFi &alConectarse(AccionAlConectarse accion) {
    this->accionAlConectarse = accion;
    return *this;
  }

 public:
  ConexionWiFi &intentarConectarseALaRed();

 private:
  void invocarAccionAlConectarse() {
    this->accionAlConectarse({WIFI_SSID, WiFi.status() == WL_CONNECTED});
  }
  void invocarAccionAlIntentarConectarse() {
    this->accionAlIntentarConectarse(
        {WIFI_SSID, WiFi.status() == WL_CONNECTED});
  }

 public:
  AccionAlIntentarConectarse accionAlIntentarConectarse;
  AccionAlConectarse accionAlConectarse;

 private:
  WiFiClient wifi;
};

#endif  // !DEBUG