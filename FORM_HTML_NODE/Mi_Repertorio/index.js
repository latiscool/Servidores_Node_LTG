// Realizar el siguiente ejercicio llamado “Mi repertorio”, en el que se requiere desarrollar un
// servidor en Node que disponibilice 4 rutas para la creación, lectura, renombramiento y
// eliminación de un archivo que contenga una lista con canciones.
// Para aplicar la lógica en el lado del cliente, crea un documento HTML con 2 formularios:
// *****
// ● Primer formulario: Debe tener un input para la definición del nombre del archivo a
// crear y un texto para el contenido del mismo. Asegurate de declarar el atributo
// “name” en los campos de entrada puesto que este será el identificador dentro de las
// query strings. Además, el atributo “action” del formulario debe ser la siguiente
// http://localhost:8080/crear.
// *****
// ● Segundo formulario: Debe tener un input para la definición del nombre del archivo a
// consumir e igual que el primer formulario, debe tener el atributo “action” pero en esta
// ocasión la dirección será http://localhost:8080/leer.
// **********

// Lógica en el lado del servidor
// Ahora que tenemos los formularios, lo siguiente será crear las rutas para diferenciar las
// funciones que queremos que cumpla nuestro servidor, esto lo lograremos simplemente con
// condicionales que evalúen cuál es la URL que se está usando para consultar al servidor.
// Para esto deberás crear un archivo index.js y seguir los siguientes pasos para desarrollar la
// lógica de nuestro servidor que permita crear y leer archivos de texto alojados en nuestro
// servidor

// ● Paso 1: Importar el módulo http en una constante.
// ● Paso 2: Importar el módulo url en una constante.
// ● Paso 3: Importar el módulo File System en una constante

const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8080;
const host = 'localhost';

const requestListener = (req, res) => {
  const params = url.parse(req.url, true).query; //Captura el contenido de los inputs
  // .nombre  y .contenido asi se nombro los atributos name de los inputs
  const nombre = params.nombre;
  const leer_nombre = params.leer_nombre;
  const contenido = params.contenido;
  const old_nombre = params.old_nombre;
  const new_nombre = params.new_nombre;
  const eliminar_nombre = params.eliminar_nombre;
  // ● Paso 6: Crear una ruta “/crear” que ejecute la creación de un archivo con el método
  // writeFile del módulo File System, usando los parámetros nombre y contenido de la
  // url expuestos en la url de la petición. Devuelve un mensaje de éxito al cliente.
  //  <!-- Primer Formulario -->
  if (req.url.includes('/crear')) {
    fs.writeFile(nombre, contenido, () => {
      res.write('Archivo creado con Exito!');
      res.end();
    });
  }
  // Paso 7: Crea una ruta “/leer” que use el método readFile del módulo File System para
  // obtener el contenido del archivo cuyo nombre debe ser el obtenido por query string
  //  <!-- Segundo Formulario -->
  if (req.url.includes('/leer')) {
    fs.readFile(leer_nombre, (err, data) => {
      res.write(data);
      res.end();
    });
  }

  // <!-- Tercer Formulario Renombrar-->.

  if (req.url.includes('/renombrar')) {
    fs.rename(old_nombre, new_nombre, () => {
      res.write(`Archivo ${old_nombre} fue renombrado por ${new_nombre}`);
      res.end();
    });
  }

  // <!-- Cuarto Formulario Eliminar-->

  if (req.url.includes('/eliminar')) {
    fs.unlink(eliminar_nombre, () => {
      res.write(`Archivo ${eliminar_nombre} fue eliminado con exito`);
      res.end();
    });
  }
};

const server = http.createServer(requestListener);

//JUNTANO TODO

server.listen(port, host, () => {
  console.log(`El servidor se esta ejecutando en http://${host}:${port}`);
});
