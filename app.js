const axios = require('axios');
const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		describe: 'Nombre de la Ciudad',
		demand: true
	}
}).argv;

console.log(argv);

let encodedUrl = encodeURI(argv.direccion);
axios
	.get(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBbVLEqTQrgC6gHoMIQQ3NfebX7o6MgmtU`
	)
	.then(respuesta => {
		let localidad = respuesta.data.results[0].formatted_address;
		let coordenadas = respuesta.data.results[0].geometry.location;
		console.log(localidad);
		console.log(coordenadas.lat);
		console.log(coordenadas.lng);
	})
	.catch(e => console.log('ERROR !!!!'));
