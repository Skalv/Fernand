module.exports = {
  apps: [
    {
      name: "Fernand",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start -H 0.0.0.0"
    }
  ]
}
