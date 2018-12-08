const axios = require("axios");

const getLugarLatLng = async direccion => {
  let encodedUrl = encodeURI(direccion);

  let respuesta = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBbVLEqTQrgC6gHoMIQQ3NfebX7o6MgmtU`
  );
  if (respuesta.data.status === "ZERO_RESULTS") {
    throw new Error(`No hay resultados para la ciudad ${direccion}`);
  }

  return {
    direccion: respuesta.data.results[0].formatted_address,
    lat: respuesta.data.results[0].geometry.location.lat,
    lng: respuesta.data.results[0].geometry.location.lng
  };
};

module.exports = { getLugarLatLng };
