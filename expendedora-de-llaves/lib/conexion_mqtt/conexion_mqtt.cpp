#include "conexion_mqtt.h"

#include "../configuracion_mqtt/configuracion_mqtt.h"

#define MQTT_CLIENT_ID "ESP32"
#define MQTT_MAX_MSG_SIZE 32

ConexionMQTT &ConexionMQTT::intentarConectarseAlBroker() {
  this->mqtt.setServer(MQTT_HOST, MQTT_PORT);
  this->mqtt.setCallback([this](char *t, uint8_t *m, unsigned int lm) {
    const char *topic = lm >= MQTT_MAX_MSG_SIZE ? "error" : t;
    char contenido[MQTT_MAX_MSG_SIZE];
    unsigned int longitud_del_mensaje =
        lm >= MQTT_MAX_MSG_SIZE ? MQTT_MAX_MSG_SIZE - 1 : lm;
    strncpy(contenido, (char *)m, longitud_del_mensaje);
    contenido[longitud_del_mensaje] = '\0';
    this->accionAlRecibirMensaje({topic, contenido});
  });
  return *this;
};

ConexionMQTT &ConexionMQTT::esperarMensajes() {
  while (!this->mqtt.connected()) {
    if (this->mqtt.connect(MQTT_CLIENT_ID)) {
      this->mqtt.subscribe(MQTT_TOPIC);
      this->accionAlConectarse({this->mqtt.state(), this->mqtt.connected()});
    } else {
      this->accionAlDesconectarse({this->mqtt.state(), this->mqtt.connected()});
    }
  }
  this->mqtt.loop();
  return *this;
};