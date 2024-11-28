#ifndef CONEXION_MQTT_H
#define CONEXION_MQTT_H

#include <PubSubClient.h>  //Nick O'Leary
#include <WiFi.h>
#include <stdint.h>

#include <functional>

#include "conexion_wifi.h"

typedef struct {
  const char *topic;
  const char *contenido;
} MensajeMQTT;

typedef struct {
  int codigo_de_error;
  bool conectado;
} InformacionSobreElEstadoDeLaConexionMQTT;

typedef void (*AccionAlRecibirUnMensaje)(MensajeMQTT mensaje);
typedef void (*AccionAlConectarseAlBroker)(
    InformacionSobreElEstadoDeLaConexionMQTT info);
typedef void (*AccionAlDesconectarseDelBroker)(
    InformacionSobreElEstadoDeLaConexionMQTT info);

class ConexionMQTT {
 public:
  ConexionMQTT() {};
  ~ConexionMQTT() {};

 public:
  ConexionMQTT &alDesconectarse(AccionAlDesconectarseDelBroker accion) {
    this->accionAlDesconectarse = accion;
    return *this;
  };
  ConexionMQTT &alConectarse(AccionAlConectarseAlBroker accion) {
    this->accionAlConectarse = accion;
    return *this;
  };
  ConexionMQTT &alRecibirUnMensaje(AccionAlRecibirUnMensaje accion) {
    this->accionAlRecibirMensaje = accion;
    return *this;
  };
  ConexionMQTT &enlazarConConexionWiFi(ConexionWiFi &conexion_wifi) {
    this->mqtt.setClient(conexion_wifi);
    return *this;
  };

 public:
  ConexionMQTT &intentarConectarseAlBroker();
  ConexionMQTT &esperarMensajes();

 public:
  AccionAlConectarseAlBroker accionAlConectarse;
  AccionAlDesconectarseDelBroker accionAlDesconectarse;
  AccionAlRecibirUnMensaje accionAlRecibirMensaje;

 private:
  PubSubClient mqtt;
};

#endif  // !DEBUG