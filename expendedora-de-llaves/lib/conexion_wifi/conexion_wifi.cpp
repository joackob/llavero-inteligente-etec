#include "conexion_wifi.h"

#include "../configuracion_wifi/configuracion_wifi.h"

void conectarConLaRedWifi();
bool estaConectadoALaRedWifi();

ConexionWiFi &ConexionWiFi::intentarConectarseALaRed() {
  conectarConLaRedWifi();
  while (!estaConectadoALaRedWifi()) {
    this->invocarAccionAlIntentarConectarse();
  }
  this->invocarAccionAlConectarse();
  return *this;
};

void conectarConLaRedWifi() { WiFi.begin(WIFI_SSID, WIFI_PASS); }

bool estaConectadoALaRedWifi() { return WiFi.status() == WL_CONNECTED; }