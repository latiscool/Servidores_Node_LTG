// Ejercicio llamado “Consultando por RUT”, en el que se requiere
// desarrollar un servidor en Node, que disponibilice una ruta para consultar la existencia de
// una persona en una base de datos, por medio de su rut recibido como una query string.
// Para simular la base de datos crearemos un arreglo con un único objeto que tendrá los
// datos del usuario de este ejercicio.
// Basado en el servidor creado anteriormente para obtener la fecha de hoy, realiza los
// siguientes pasos para hacer los cambios correspondientes y lograr realizar este nuevo
// ejercicio:

// // ***

// ● Paso 5: Usar el método find para encontrar un usuario dentro del arreglo creado en
// donde la propiedad rut coincida con el rut recibido como parámetro. Guarda el
// resultado en una variable “usuario”.
// ● Paso 6: Usar un operador ternario para evaluar si el “usuario” es true, en caso de ser
// así devolver con el método write del parámetro request “¡Usuario encontrado!
// Nombre: … - Apellido: ...” (cambia los puntos suspensivos por el nombre y apellido
// del usuario), en caso contrario devuelve “No existe ninguna persona registrada con
// ese RUT”.

// ● Paso 1: Importar el módulo “url” en una variable y modulo http.
const http = require('http');
const url = require('url');
const port = 8080;
const host = 'localhost';

const requestListener = (req, res) => {
  // ● Paso 2: Almacenar en una constante los parámetros recibidos en la consulta y
  // envíalos por consola.
  const params = url.parse(req.url, true).query;
  console.log(params);
  // ● Paso 3: Crear un arreglo con un único usuario con las propiedades: rut, nombre y apellido.
  let users = [
    {
      rut: '123456789',
      nombre: 'Pat',
      apellido: 'Morita',
    },
  ];
  // ● Paso 4: Crear una ruta /usuarios. En esta ocasión debemos usar el método includes
  // de JavaScript puesto que la url al tener parámetros no será igual a la que definimos
  // como ruta sino que tendrá concatenada los query strings.
  if (req.url.includes('/usuarios')) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8;' });
    let usuario = users.find((u) => u.rut === params.rut);

    usuario
      ? res.write(
          `¡Usuario encontrado! Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido}`
        )
      : res.write('No existe ninguna persona resgitrada con ese RUT');
  }
  res.end();
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`El servidor se esta ejecutando en http://${host}:${port}`);
});
