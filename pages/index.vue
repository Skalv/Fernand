<template>
  <div class="col-12 col-md-10 col-xl-11 Dashboard">
    <div class="row title-widget">
      <div class="col-12">
        <h2>vos tâches récurrentes</h2>
        <p>Gérer vos tâches récurrentes en les déplacents ou en ajoutant.</p>
      </div>
    </div>

    <!-- <Widgets :widget-list="widgets"/> -->

    <div class="row title-widget">
      <div class="col-12">
        <h2>Rapports des dernières 24h</h2>
        <p>Visualisez l'évolution de la température et du l'humidité durant la journée</p>
      </div>
    </div>
    <div class="row Graphs">
      <div class="col-sm-12 col-xl-4">
        <div class="Graph">
          <h4>Température de la semaine</h4>
          <span>Du 1er janvier au 15 août 2018</span>
          <!-- <ThermostatTemp class="chartjs_container" :data="lastWeek.temperature" /> -->
        </div>
      </div>
      <div class="col-sm-12 col-xl-4">
        <div class="Graph">
          <h4>Humidité de la semaine</h4>
          <span>Du 1er janvier au 15 août 2018</span>
          <!-- <ThermostatHum class="chartjs_container" :data="lastWeek.humidity" /> -->
        </div>
      </div>
      <div class="col-sm-12 col-xl-4">
        <div class="Graph">
          <h4>Humidité de la terre de la semaine</h4>
          <span>Du 1er janvier au 15 août 2018</span>
          <!-- <ThermostatMoist class="chartjs_container" :data="lastWeek.moisture" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
  // async asyncData (ctx) {
  //   // let thermostat = await ctx.$axios.get('/dht/stats')
  //   // let widgets = await ctx.$axios.get('/widgets')

  //   let graphTemp = {
  //     labels: [],
  //     values: []
  //   }
  //   let graphHum = {
  //     labels: [],
  //     values: []
  //   }
  //   let graphMoisture = {
  //     labels: [],
  //     values: []
  //   }

  //   _.eachRight(thermostat.data, (value) => {
  //     if (value.type === "humidity") {
  //       graphHum.labels.push(value.created_at)
  //       graphHum.values.push(value.value)
  //     } else if (value.type === "temperature") {
  //       graphTemp.labels.push(value.created_at)
  //       graphTemp.values.push(value.value)
  //     } else if (value.type === "moisture") {
  //       graphMoisture.labels.push(value.created_at)
  //       graphMoisture.values.push(value.value)
  //     }
  //   })

  //   let test = [{
  //     pluginName: "Moisture2000",
  //     widgetName: "moistureWidget"
  //   }]

  //   return {
  //     lastWeek : {
  //       temperature: graphTemp,
  //       humidity: graphHum,
  //       moisture: graphMoisture
  //     },
  //     widgets: test
  //   }
  // }
}
</script>
