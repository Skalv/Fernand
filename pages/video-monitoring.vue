<template>
  <div class="col-12 col-md-10 col-xl-11 VideoMonitoring">
    <div class="row title-widget">
      <div class="col">
        <h2>Surveillez votre ferme</h2>
        <p>Suivez en direct ce qu'il se passe dans votre ferme.</p>
      </div>
      <div class="col-auto">
        <span
          class="badge badge-pill badge-success"
          :class="connectToFernand ? 'badge-success' : 'badge-danger'"
        >
          &nbsp;
        </span>
      </div>
    </div>
    <div class="row">
      <div v-if="currentVideo" class="col">
        <h4>{{ currentVideo.name }}</h4>
        <img
          :src="`http://${currentVideo.ip}:81/stream`"
          alt="Flux vidéo de la caméra"
          class="stream"
        />
      </div>
      <div v-else class="col">
        <h4>Aucune caméra de connecté</h4>
      </div>
      <div class="col-auto">
        <div class="controls">
          <div>
            <button class="up" @click="moveCam('up')">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAkUlEQVRYhe2USwqAMAwF5wCutXhRl15SrJ5GF1aQ4q82UYQMBEoJnZcsCoZh5FGG+gQH9KHc2/IK6IAp1AjUb8kd4IPYR2f1TWwnH1imLjd3qpvYk6+ohziTq4e4I1cLkSIXD/FELhYiR54dQkL+OISkPDlEgd6vFv+exVFjg9zkMesm2qvGw3QCaL5tGIbxU2aiCUdzRyJz1wAAAABJRU5ErkJggg=="
              />
            </button>
          </div>
          <div>
            <button class="left" @click="moveCam('left')">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAY0lEQVRYhe3WMQqEQBAF0YfojUzUzT2sezoNDDUw2dBg1kH4dYCugoamCaEcH8w15Rt29E/LJ6w48EUXeeSRR16SwXXhDixoSwua0gP/wajiChKRiEQk4i5Vn9LfiGpveXgvJ4vvPBivapXBAAAAAElFTkSuQmCC"
              />
            </button>
            <button class="bottom" @click="moveCam('bottom')">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAkElEQVRYhe2UPQqAMAxG3wE6a/G0jh5Q/DlNXVKQSkVrWpc8CF1K3pcMAcMwDOOK+7P3COzAUEHeAzMw5T44YAWCvF5R7pPe2U10kjKgt4k4eQC2Jz01Q7yWa4YolmuE+Cz/EkJNXhJCXf4mRDX5kxDV5Xchmskj6VWrdT1vOW+i2eQpHlikmk2e0kkZhlHMAbgwR4XJY367AAAAAElFTkSuQmCC"
              />
            </button>
            <button class="right" @click="moveCam('right')">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAcUlEQVRYhe3WMQ6CUBAG4S8+L+E9aEgo7DypNt6KK0BCqYXWxhDCI/BPvZuZZJslHJ0yY+eGC/qFW/6iwYQBXY2AgjteGHFNRCISkYgtRpzx/EYMaH8Nn9YoWpOCh0oniDzyyPcvZwNPKZ+3vJo87I83aNw8yHI8OR4AAAAASUVORK5CYII="
              />
            </button>
          </div>
        </div>
      </div>
      <div class="col-auto videoList">
        <h4>Mes caméras</h4>
        <div
          v-for="cam in videoList"
          :key="cam.ip"
          class="videoPreview"
          :class="{ active: currentVideo && cam.ip === currentVideo.ip }"
          @click="currentVideo = cam"
        >
          <p>{{ cam.name }}</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABMElEQVRYhe2VT07CQBTGfxotC1NwCx7BhYfwAKg3YIvAmTiLRNEEGxcW9BqicYmLeU0mhc6ftuNqvuSlad/3vvfNtG8KERER7jgDcmBniVy4rWPu0LyIed0mNuFf4MpQfwn8OOjUNjByWMSoDQOhsKd/bCl4BBalZx1gCjwD3xJLYAIkbTtcAA/a/QXwRvXWZsDAQ9+L0NGa58AQSCVugI3kXqneiUYGZpJbA70D+Z5m4j6EgRfJDQ31t8JZhjCwlVxqqO8K58tV3zYF5WIbjjz0vA2s5Xpt4BS5d18jBUyvYCK5DYc/wnPgUzjjGvpWQoKa8x3wgfrguhJ3WvMVcBrCAKhDJtN45VgB/Qb6Tv+CBDXnT6jJ2KKO7DHVK2/VQBPs6Z8YiP8CnzGMiIgIgj+zDqDGr02gKAAAAABJRU5ErkJggg=="
          />
        </div>
        <div class="videoPreview" @click="openManualAddCamModal">
          <p>Ajout manuel</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACAElEQVRYhe3WvU4UURQH8B8m7BZAoVEbSzs2BhtFH8EaPworHmB5E11cXoA3kBo6iYlrLEyQCiuWJxAMS1yzFvdOdrLMzM4MS2HCP7mZO/d8/e+Ze84dbnCD/wgLOMRoyjiMujPHdongydiuG2Sa43OsFNi38LuEn9oE1ktsYn0WBK4Ll/zfmmLwGfsTa01s4AvOhJT30EZj1gz38Sn1/gDf5af2G+5U8F9JoZkKfow1LOEu3uAoynryM3ElAhup4Fm7vI+fUad9HQR6UbZWYP8SO3iRI/+Iv3UJnEbZUpGDEnhYl0DSYO5NCdBCBz+EKjmL806UFaLMJ3idI29gC0P5VTJEV0G5FhFoR9mRcOAmg+8Zt+tNPBUupQWs4gMGUWcvj0QRgYZQ5yPhtL9KybaMK+RRjj3hHulH3W5VAnAbX6POTlxrCak9zwie5W9FyMQQy1UJEDLRNi61TrTpZOjm+evG9fd1CEwi+Ul5UoHAalw/yDMoM5rRJukPiyV9iLoj/Jp2GxZhLhWwKpK4o0kCcxXGINr043M5w0eW37Tu8VUykGA3Pt9WsEl0dwu1SiIpw4HL/4tZh/AxLuSUYV0kZdXPIDEZ/CTqbs4qOMwbt+JBJPRMOO2LeC50ywvjVjw/SwKEBtVVfBn9EXY+8+BptIQOdyD0iNM4fyfjm/8D7vX0jqAsH8QAAAAASUVORK5CYII="
          />
        </div>

        <b-modal
          id="manualAddCamModal"
          title="Nouvelle camera"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="addManualNewCam">
            <b-form-group
              label="Nom de la camera"
              label-for="manualNewCamName"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="manualNewCamName"
                v-model="manualNewCam.name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Ip de la camera"
              label-for="manualNewCamIp"
              invalid-feedback="Ip is required"
            >
              <b-form-input
                id="manualNewCamIp"
                v-model="manualNewCam.ip"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoList: [],
      currentVideo: null,
      connectToFernand: false,
      manualNewCam: {}
    }
  },
  mounted() {
    this.$mqtt.on("connect", () => {
      console.log("MQTT connected")
      this.connectToFernand = true
    })
    this.$mqtt.on("error", (err) => {
      console.error("MQTT Failed : ", err)
      this.connectToFernand = false
    })
    this.$mqtt.subscribe("welcome")
    this.$mqtt.on("message", (topic, message) => {
      this.handleMsg(topic, JSON.parse(message.toString()))
    })
    this.$mqtt.publish(
      "welcome",
      JSON.stringify({
        command: "fetchAll"
      })
    )
  },
  methods: {
    handleMsg(topic, datas) {
      switch (topic) {
        case "welcome":
          if (datas.command === "newCam") {
            if (
              !this._.find(this.videoList, function (o) {
                return o.ip === datas.ip
              })
            ) {
              this.videoList.push({ name: datas.name, ip: datas.ip })
              if (!this.currentVideo) {
                this.currentVideo = this.videoList[0]
              }
            }
          }
      }
    },
    moveCam(dir) {
      console.log("rotate X", this.pos_x)
      this.$axios.$get(
        `http://${this.currentCam.ip}/control?var=rotate_x&val=${this.pos_x}`
      )
    },
    openManualAddCamModal() {
      this.$bvModal.show("manualAddCamModal")
    },
    resetModal() {
      this.manualNewCam = {}
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.addManualNewCam()
    },
    addManualNewCam() {
      console.log(this.manualNewCam)
      this.videoList.push({
        name: this.manualNewCam.name,
        ip: this.manualNewCam.ip
      })
      this.$nextTick(() => {
        this.$bvModal.hide("manualAddCamModal")
      })
    }
  }
}
</script>
