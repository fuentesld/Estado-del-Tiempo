const argv = require("yargs").options({
  direccion: {
    alias: "d",
    describe: "Nombre de la Ciudad",
    demand: true
  }
}).argv;

console.log(argv);
