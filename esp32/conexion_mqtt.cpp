#include "conexion_mqtt.h"

#include "mqtt_config.h"

#define MQTT_CLIENT_ID "ESP32"

ConexionMQTT::ConexionMQTT(){};

ConexionMQTT::~ConexionMQTT(){};

ConexionMQTT &
ConexionMQTT::configurarConexionAlBroker(WiFiClient &conexion_wifi) {
  this->socket.setServer(MQTT_HOST, MQTT_PORT);
  this->socket.setCallback(this->alRecibirMensaje);
  this->socket.setClient(conexion_wifi);
  return *this;
};

ConexionMQTT &ConexionMQTT::aguardarMensajes() {
  while (!this->socket.connected()) {
    if (this->socket.connect(MQTT_CLIENT_ID)) {
      this->socket.subscribe(MQTT_TOPIC);
      this->alConectarse();
    } else {
      this->alDesconectarse(this->socket.state());
    }
  }
  this->socket.loop();
  return *this;
};
