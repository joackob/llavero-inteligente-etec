#include "conexion_wifi.h"

#include "wifi_config.h"

ConexionWiFi::ConexionWiFi(){};

ConexionWiFi::~ConexionWiFi(){};

ConexionWiFi &ConexionWiFi::intentarConectarseALaRed() {
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    this->alIntentarConectarse(WIFI_SSID);
  }
  this->alConectarse(this->wifi);
  return *this;
};
