const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    describe: "Nombre de la Ciudad",
    demand: true
  }
}).argv;

let infoClima = async direccion => {
  try {
    let coords = await lugar.getLugarLatLng(direccion);
    let temperatura = await clima.getClima(coords.lat, coords.lng);

    return `La temperatura en ${coords.direccion} coordenadas ${coords.lat}, ${
      coords.lng
    } es de ${temperatura} grados centígrados`;
  } catch (error) {
    return `No se pudo determinar el clima en ${direccion}`;
  }
};

infoClima(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e));

// lugar
//   .getLugarLatLng(argv.direccion)
//   .then(resp => console.log(resp))
//   .catch(e => console.log(e));

// clima
//   .getClima(18.8877619, -99.0748193)
//   .then(temp => console.log(temp))
//   .catch(e => console.log(e));
