#ifndef CONEXION_MQTT_H
#define CONEXION_MQTT_H

#include <PubSubClient.h>  //Nick O'Leary
#include <WiFi.h>
#include <stdint.h>

using EventoAlDesconectarseDelBroker = void (*)(int codigo_de_error);
using EventoAlConectarseAlBroker = void (*)();
using EventoAlIntentarConectarseAlBroker = void (*)();
using EventoAlRecibirUnMensaje = void (*)(char *topic, uint8_t *mensaje,
                                          unsigned int longitud_del_mensaje);

class ConexionMQTT {
public:
  ConexionMQTT();
  ~ConexionMQTT();
  ConexionMQTT &configurarConexionAlBroker(WiFiClient &conexion_wifi);
  ConexionMQTT &aguardarMensajes();

public:
  EventoAlIntentarConectarseAlBroker alIntentarConectarse;
  EventoAlConectarseAlBroker alConectarse;
  EventoAlDesconectarseDelBroker alDesconectarse;
  EventoAlRecibirUnMensaje alRecibirMensaje;

private:
  PubSubClient socket;
};

#endif
