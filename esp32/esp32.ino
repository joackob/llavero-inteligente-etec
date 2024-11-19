// settings
#include "mqtt_config.h"

// src
#include "cerradura.h"
#include "conexion_mqtt.h"
#include "conexion_wifi.h"
#include "indicador_led.h"
#include "logger.h"



IndicadorLed indicadorLed;
Cerradura cerradura;
Logger logger;
ConexionWiFi wifi;
ConexionMQTT mqtt;

void setup() {
  logger.configurar();
  cerradura.configurar();
  indicadorLed.configurar();
  wifi.alIntentarConectarse = informarLaIntencionDeConectarseALaRedWifi;
  wifi.alConectarse = informarSobreLaIPAsignadaYConfigurarConexionMQTT;
  mqtt.alIntentarConectarse = informarLaIntencionDeConectarseAlBroker;
  mqtt.alConectarse = informarLaConexionConElBroker;
  mqtt.alDesconectarse = informarLaDesconexionDelBroker;
  mqtt.alRecibirMensaje = atenderLaConsulta;

  wifi.intentarConectarseALaRed();
}

void loop() {
  mqtt.aguardarMensajes();
}

void informarLaIntencionDeConectarseALaRedWifi(const char *wifi_ssid) {
  logger.informar(String("Conectandose a la red: ") + wifi_ssid);
  indicadorLed.parpadear();
}

void informarSobreLaIPAsignadaYConfigurarConexionMQTT(
  WiFiClient &conexion_wifi) {
  logger.informar("Conectado a la red wifi");
  indicadorLed.apagar();
  mqtt.configurarConexionAlBroker(conexion_wifi);
}

void informarLaIntencionDeConectarseAlBroker() {
  logger.informar("Conectandose al broker MQTT...");
  indicadorLed.parpadear();
}

void informarLaConexionConElBroker() {
  logger.informar(String("Conectado al broker MQTT"));
  indicadorLed.apagar();
}

void informarLaDesconexionDelBroker(int codigo_de_error) {
  logger.informar(String("Dispositivo desconectado, codigo de error:") + String(codigo_de_error) + ". Reconectando en 2 segundos...");
  indicadorLed.parpadear();
  delay(2000);
}

void atenderLaConsulta(char *t, uint8_t *m, unsigned int l) {
  String topic = String(t);
  String message;
  for (int i = 0; i < l; i++) {
    message += (char)m[i];
  }

  logger.informar(String("Message received: ") + topic + ": " + message);

  if (message == MQTT_MSG_TO_OPEN_LOCKER) {
    cerradura.abrir();
    logger.informar("Locker opened");
  } else if (message == MQTT_MSG_TO_CLOSE_LOCKER) {
    cerradura.cerrar();
    logger.informar("Locker closed");
  }
}
