const axios = require("axios");

const getClima = async (lat, lng) => {
  let respuesta = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&APPID=8ae752b423b06df94fb14d1ecad0e842`
  );

  if (respuesta.cod === 400) {
    throw new Error(`No hay resultados para coordenadas ${lat}, lng ${lon}`);
  }

  return respuesta.data.main.temp;
};

module.exports = {
  getClima
};
