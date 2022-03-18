// En el Ejercicio de las query strings para saber la existencia de un usuario,
// crea un servidor con Node que por medio de una ruta “/switch” cambie el estado de
// una variable de tipo booleana por un parámetro (true o false) recibido capturado en
// la URL de la petición.
// Devuelve el mensaje “ON” si el valor de la variable booleana es exactamente igual a
// true y un “Off” si no lo es

const http = require('http');
const url = require('url');
http
  .createServer(function (req, res) {
    let boolean = false;
    const params = url.parse(req.url, true).query;
    if (req.url.includes('/switch')) {
      let buleano = params.buleano;
      buleano == 'true' ? (boolean = true) : (boolean = false);
      boolean ? res.write('ON') : res.write('OFF');
    }
    res.end();
  })
  .listen(8080, () => console.log('Escuchando el puerto 8080'));
