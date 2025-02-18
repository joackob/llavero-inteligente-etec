#include "conexion_mqtt.h"

void limpiarBuffer(char *);
void establecerTopicSiElMensajeEsValido(char *, uint8_t *, unsigned int,
                                        char *);
void establercerContenidoSiElMensajeEsValido(char *, uint8_t *, unsigned int,
                                             char *);

ConexionMQTT &ConexionMQTT::configurar() {
  this->mqtt.setServer(MQTT_HOST, MQTT_PORT);
  this->mqtt.setCallback([this](char *t, uint8_t *m, unsigned int lm) {
    char topic[MQTT_MAX_MSG_SIZE];
    char contenido[MQTT_MAX_MSG_SIZE];
    limpiarBuffer(topic);
    limpiarBuffer(contenido);
    establecerTopicSiElMensajeEsValido(t, m, lm, topic);
    establercerContenidoSiElMensajeEsValido(t, m, lm, contenido);
    this->invocarAccionAlRecibirMensaje({topic, contenido});
  });
  return *this;
};

ConexionMQTT &ConexionMQTT::intentarConectarseAlBroker() {
  while (!this->estaConectado()) {
    this->conectar();
    this->suscribir();
    if (this->estaConectado()) {
      this->invocarAccionAlConectarse(
          {this->mqtt.state(), this->mqtt.connected()});
    } else {
      this->invocarAccionAlEstarDesconectado(
          {this->mqtt.state(), this->mqtt.connected()});
    }
  }
  this->iterarEsperandoUnMensajeNuevo();
  return *this;
};

bool mensajeEsValido(char *t, uint8_t *m, unsigned int lm) {
  unsigned int lt = strlen(t);
  return lm < MQTT_MAX_MSG_SIZE && lt < MQTT_MAX_MSG_SIZE && t != nullptr &&
         m != nullptr
}

void establecerTopicSiElMensajeEsValido(char *t, uint8_t *m, unsigned int lm,
                                        char *topic) {
  if (!mensajeEsValido(t, m, lm)) {
    strcpy(topic, "mensaje invalido");
    return;
  }
  strcpy(topic, t);
}

void establercerContenidoSiElMensajeEsValido(char *t, uint8_t *m,
                                             unsigned int lm, char *contenido) {
  if (!mensajeEsValido(t, m, lm)) {
    strcpy(contenido, "mensaje invalido");
    return;
  }
  strncpy(contenido, (char *)m, lm);
}

void limpiarBuffer(char *buffer) { memset(buffer, '\0', MQTT_MAX_MSG_SIZE); }