<template>
  <div class="col-auto Darksky">
    <div class="DSitem">
      <h6>Saint Martin en Campagne</h6>
      <div class="data">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB8klEQVRYhe3WzU4UURAF4M+fRzBmZCQoiwGX+gxulB/dYfQJjBoNCQ/iToxPoCBBo7gxvoQRMRFj1I0rZQWMk3Fxb6eHSc/07WZ2cJLOzWROVZ2uul1VHOOo40RF/jhuYAYX4m/4gW94g3X8HJXADE0so41uydPBc0yMKvg8dqLz3eh8AS28jc8UbmEFe5G7g7nDBn8gvFEXL+QpH4YJrMqzcb9u8Pno4B8e1rBfjPYdNTLRlKf90RBeVvdhIrr4i3NVBDyLhislvDIBsBY5y6nBx4W07yq/ySkCLgoXsy1k9gBOFhjcxCm8xvcS5ynI+sNpoYeUCrgWz9URBM+QlfJ6CvmLkNZWAjelBDAdeZ9TBGS3f6OCgEYJb0PenA6gqAS9zsuwGc8PCSKSsRWDTyVwz+Jj5G9hbADvUuR86v+jKANf43k5QcBvXBVq28J7xZm4Es/tBJ/uSWtCvWgI5egq7v1ZM7qb4uy80DT2VBupDUF8Pyaxb0AjGoSnguJR9IL16OtJFaMx+ee4eIjgS9HHHzW+kjn5OK0jYqnHfqaGPcKFyhaSNWGwlGFSnvaO4ntRCbPCPO8KF/Mlbgvt9Z3Q5aZxJ4rcl6e99pv34wweS1tK28LsT1pAqq7lTWFVmxXK0buWbwtj9xV+VfR7jCOM/zBKl24oeY2/AAAAAElFTkSuQmCC"
        />
        <p>{{ time }}</p>
      </div>
    </div>
    <div class="DSitem">
      <h6>Température</h6>
      <div class="data">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVRYhe2UPU7DQBCFP0NElYa/Q1AicQEQ1AgOkhbRAVWCcotcAIECV0gBJwiUNKAk/HRAZIp9K1vJJrLssZCIn7Qaz+zszNvZGUOFRUeU40xsGXspBwFT1AqcnbxhPMM+F39egaIEYqZ7ImQrjUBhFOmBWVisHgih6oFSe2DLyCcXtoEB7n27sqXfu6vvgXxNUQf6SnBGUuY0gQg4l97XGTM0FPhWiWpAK0WgJVsE3MnWsCTQU9B96e1Ucr8utXcgvWdJYKigq9JfAwRetLcmfZglcNYp8OP6LfkV8PG2H8llSwJPkjuSnYBPZ8LnMWPsTLjAlfVK+grQBJ61mrIB3JBMixk2gXcFPpnjdyqfEbBuSQDgGBgrwTWwi5v1OrBHcvMxcGid3OMIeGN6AvwalZncYwP3x3sAPoEP4B735uZlr/D/8Qu9n1iIkGA3zwAAAABJRU5ErkJggg=="
        />
        <p>{{ temp }}<span class="muted">°</span></p>
      </div>
    </div>
    <div class="DSitem">
      <h6>Humidité</h6>
      <div class="data">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL9SURBVGhD7ZlJ6E1RHMf/howLlCERpQyh2JAhkkRWpmwssWBhoUiGogwL2RiiyEJZWEmsUGZRyLDDwpSFlCQUmT5f7rdOr3e96Z737q37qU+997vn/H7nvXfvPeee11VSUlKSFZNx0r+XxWUIPk8crEAR6YGX8XfipSRWOA6gP4Tdj4ViBVZ+CPkLl2EhGI0f0IP3NeL3OjYKc42ugZvoQX9C3bGkXjt+HXN9vexCD7byNNLpppiP78RcMhd/oAd6CCs5gj6utnMwVwzCV+hBPsY+WIliT9Dt1Ed9c8MZ9OC+4ERMQ9fLV3R79c0FS9GDkuuwFmoT9lmCHWUgvkUP6CLWi9q6n3IMwI5xAj2YzzgG60VtdRq6/3HsCNMxvJ1uwkbZjO6vXNOw7dxAD+Ih9sRGUZ9H6DyaKNvKcnRxuQCbZSGGuZS7LehbfIou3MgFnkZ44T/DZn7dhlmFLvoTp2CrTEXlcl7ViM4DdMFzCmSEcjnvfQViom/OxaTO76xYhGHuLH7pVPahC+k66YZZoVzhc8sejMYddKFtCmTMDnT+2wrEIpyJZyqQMbPQ+fUgFoV+6CJyGBrNIysTRyrQJMoZ1lDNKHxDFxmrQEK47VPP6jcN5XQe1YrGS3QhPRGag+j4eQWaZB46zwsFYnENXWirAgnz0XEt/hZjM2xH57miQCy2oAvdVSDgFvqYlvSrsTs2wj10Dq2MozEBXUjORjMeP2J4/A2exXrQRkTYdxxGRUttF9O9PpwUdft8h+GAZC30y+kXdvurGJ0ZGD5QVc7Auv2exO/oNrXYi26r3HpoawunMSxc7ZarbR5tym38+y6d9Rh+MaewbWii0lOhi8vD2BfrRW3DDTuplXW0STANnULhvCK14bYG/zeY/rgWX2PYV/NGK6uClhiK4W3XagPuAmq1vCFRrxULN+esNr6Vq6P0Rl3w1QZYS/XZjb0wN4zAo/geqw06VG3UdjjmFv3voTWTni2OodZeUq8V0xqtkP8llpSUlGRFV9cfFck2WfZMcw0AAAAASUVORK5CYII="
        />
        <p>{{ hum * 100 }}<span class="muted">%</span></p>
      </div>
    </div>
  </div>
</template>

<script>
const Moment = require("moment")
Moment.locale("fr")

export default {
  data() {
    return {
      time: Moment().format("HH:mm"),
      temp: "12",
      hum: "70"
    }
  },
  async fetch() {
    const response = await this.$axios.$get(
      "/darksky/49.959252,1.222609?lang=fr&units=auto"
    )
    this.temp = response.currently.temperature
    this.hum = response.currently.humidity
  },
  mounted() {
    this.lastSync = Moment()
    if (!this.timer && this._isVue) {
      this.timer = setInterval(() => {
        this.time = Moment().format("HH:mm")
        if (Moment().diff(this.lastSync, "minutes") > 4) {
          this.$fetch()
          this.lastSync = Moment()
        }
      }, 10000)
    }
  }
}
</script>
