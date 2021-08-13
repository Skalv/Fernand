<template>
  <nav class="container-fluid">
    <div class="row Header">
      <a class="col Brand" href="#">
        <img
          src="~/assets/images/logo_mini.png"
          alt="Logo GreenPI"
          class="d-inline-block align-top"
        />
      </a>

      <WidgetsDarksky></WidgetsDarksky>

      <div class="col Account">
        <p class="nav-item" href="#">
          <span class="muted">Bonjour,</span> {{ username }}
        </p>
        <a class="nav-item nav-link" href="#"
          ><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJESURBVFhHvddLqE1RHMfxg7xSlEcRJSKl7oBQDBmgTChSuogyMHBJkeH1LMVIRFIG3o+EidySpEhioIRQyDMJIW/f71r3TA5uZ62z9/nVp7v+p3vPWXvvdf5r3UpmumM73uIhFqKpWY73WIKN+IZxaFoO4HAchrzE4jgsPy3owBvMQRt+YSeGorT45qfxG7dwFj/goziCx/iMLeiJQjMGz3Adk32hM73hgjT+nIfnuIBeKCR9cBdecT1vOgIPsC9UBWQDnmBAqOrLFPh4/NlQuuEpVocqLd6xg3GYn/Fw0Y0KVVrsFS/iMD9z8SkOk+Ptd/Ipj+6veBU+gpz4zXECo0OVmbW4HYfJGQQnMDFUmdmMS3GYnB5wAjNClZk9OBWHWXmH+XGYl2toj8OsXIWtOSt2wK+YFaq8eGa4HIfpWQA3l/6hystseBHDQpUQO6C3v9F+7gblvrA1VAmx9dqAxoaqsSyFd2FSqOqIzceNZEWoionnhVfochJ+b3fBD/eUU2Tcxp3EF/z36NaKj5gequLjuloPL3C4L9TG04yrfkKoyslKeIIeEqqa+Ajcv7/jBBbB7bgvcjMQ7gWrYFP6CddYl5mJk/CfDnu5XuMGLuIMjuMQ9nay1nn4O3fwAdW/98C6G15Q3fGZjYSbyTKswzZ4PLuH6ofKBeb6uYJNWAMX21QMRqG5j399RZ2Ed6P0eDu9wtqcw/44LDc78AgeOKqZBle3vb/09MNN2Nm85Udhq/Xs0LTY2TyuueqPwcNrRiqVP4Cke9v/BBvPAAAAAElFTkSuQmCC"
        /></a>
        <a class="nav-item nav-link" href="#"
          ><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJXSURBVFhH1ZdLyIxRGIDHNdeSPyV3WdnJhtUvUcKClQ1RKKQUCylrfhuykIUFK3JZsbAhKZJrUiR2Um7JrUTuz3PO+H0z/8w33/lmhjz11HlP08z7ne+c875T+d/ZjovisLv04il8jkOcqHIF++IwMBdf4H6c5US7TMWz+B3P42LMUp+AyW3Ee/gF9+JILMVSfI83cY4TDahPIMsqfIYPcaYTKazHb7gPBzvRhLwEZDxexJfY7CEGsBz98W0hyqdVAjIMT+JTnOJEHtPwHbb60t8USUCG4zW8hdlNPIBzeAPzlj1L0QRkMn7Apiu7AN3thd8VpCQg3htvcUyI6jiDrkAKqQl4JF/jphBlGIdfcVmIipOagBzA63H4B3f+ZxwRouKUScDLzIcdG6Iqe/BqHCZRJoHRaAILQ1TlKB6PwyTKJCDWi7VxGPG+PxiHSZiA930q99ET0Y8n4EgcJuHemR2HSTzGmgR8+tQj2A4fcV0cRnahJfRvMAF/4rwQVZmPP3BSiLrLGrTeWKT68e63dm8OUXdxv52Iw1oO4V0sWojKYIf1CVeGqA6rlZvDJeoWx/A2DgpRAzzTT9CN0mlsbK22uV30KPQ1XEabiE4xHV/h4RC1wLbJD5/G1OLUiBn4AC9h4YeyKbGHsyNu52i67D6MP97jRAoT0T7O1nw3+nqKYm/phvOdu+w1Zz6FobgFvSNsrf2yJdgoGTfuavSce9TuYMf+ttnDbcUL6D8er9I3aFV7hB5f5+z3vGRWYNOj1i62b3Y1G3An7kALi3d76aX+R1QqvwAogneD4ivlogAAAABJRU5ErkJggg=="
        /></a>
      </div>
      <div class="dot_options"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    username() {
      return "Florent"
      // return (this.$store.state.auth.user) ? this.$store.state.auth.user.firstname : ''
    },
    humidity() {
      return "12%"
      // return this.$store.state.darksky.currentweather.humidity * 100
    }
  }
}
</script>
