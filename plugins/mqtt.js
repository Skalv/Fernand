import Vue from "vue"
import VueMqtt from "vue-mqtt"

Vue.use(VueMqtt, "mqtt://192.168.8.108:1884", {
  clientId: "WebClient-" + parseInt(Math.random() * 100000)
})
