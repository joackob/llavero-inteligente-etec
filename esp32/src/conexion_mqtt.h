#ifndef CONEXION_MQTT_H
#define CONEXION_MQTT_H

#include <PubSubClient.h>  //Nick O'Leary
#include <WiFi.h>
#include <stdint.h>

typedef void (*AccionAlIntentarConectarseALaRedWifi)(const char *ssid_wifi);
typedef void (*AccionAlConectarseALaRedWifi)(const char *ip_local);
typedef void (*AccionAlDesconectarseMQTT)(int codigo_de_error);
typedef void (*AccionAlConectarseAlBrokerMQTT)(const char *host_del_broker,
                                               uint16_t puerto_del_broker);
typedef void (*AccionAlIntentarConectarseAlBroker)();
typedef void (*AccionAlRecibirUnMensaje)(char *topic, uint8_t *mensaje,
                                         unsigned int longitud_del_mensaje);

class ConexionMQTT {
 public:
  ConexionMQTT();
  ConexionMQTT(const ConexionMQTT &other);
  ConexionMQTT(ConexionMQTT &&other);
  ~ConexionMQTT();
  ConexionMQTT &operator=(const ConexionMQTT &other);
  ConexionMQTT &alIntentarConectarseALaRedWifi(
      AccionAlIntentarConectarseALaRedWifi callback);
  ConexionMQTT &alConectarseALaRedWifi(AccionAlConectarseALaRedWifi callback);
  ConexionMQTT &alDesconectarseDelBrokerMQTT(
      AccionAlDesconectarseMQTT callback);
  ConexionMQTT &alConectarseAlBrokerMQTT(
      AccionAlConectarseAlBrokerMQTT callback);
  ConexionMQTT &alIntentarConectarseAlBrokerMQTT(
      AccionAlIntentarConectarseAlBroker callback);
  ConexionMQTT &alRecibirUnMensaje(AccionAlRecibirUnMensaje callback);
  ConexionMQTT &configurar();
  void operar();

 private:
  WiFiClient wifi;
  PubSubClient socket;
  AccionAlIntentarConectarseALaRedWifi accionAlIntentarConectarseALaRedWifi;
  AccionAlConectarseALaRedWifi accionAlConectarseALaRedWifi;
  AccionAlDesconectarseMQTT accionAlDesconectarseMQTT;
  AccionAlConectarseAlBrokerMQTT accionAlConectarseAlBrokerMQTT;
  AccionAlIntentarConectarseAlBroker accionAlIntentarConectarseAlBroker;
  AccionAlRecibirUnMensaje accionAlRecibirUnMensaje;
};

#endif
