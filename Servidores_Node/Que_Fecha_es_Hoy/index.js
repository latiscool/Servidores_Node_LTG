// Ejercicio para generar las rutas de un servidor, titulado:
// ¿Qué fecha es hoy?, en el que se requiere desarrollar un servidor en
//  Node que disponibilice una ruta para consultar la fecha actual.

// funciones de escucha de solicitudes en Node.js aceptan dos argumentos:
// req y res (podemos llamarlos de forma diferente si lo deseamos).
//  La solicitud HTTP que el usuario envía se captura en un objeto Request, que se corresponde con el primer argumento, req.
//   La respuesta HTTP que devolvemos al usuario se forma interactuando con el objeto Response en el segundo argumento, res.
// ****
// res.writeHead(200); establece el código de estado HTTP de la respuesta.
//  El código de estado HTTP indica si la solicitud HTTP fue gestionada correctamente por el servidor.
//  En este caso, el código de estado 200 se corresponde con "OK"
// ***
// función, res.end("My first server"!) ; escribe la respuesta HTTP de vuelta al cliente que la solicitó.
// Esta función devuelve cualquier dato que el servidor tenga para devolver.
// En este caso, está devolviendo datos de texto

const http = require('http');

const requestListener = (req, res) => {
  // ● Paso 1: Imprimir por consola el parámetro req en su propiedad url.
  console.log(req.url);
  // ● Paso 2: Guardar en una variable la url recibida en el parámetro req
  const url = req.url;
  // Paso 3: Crear un condicional que evalúe si la url es igual a “/hoy”.

  if (url === '/hoy') {
    // ● Paso 4: Dentro del bloque de código del condicional usa el parámetro res con un
    // método llamado write, que sirve para devolver al cliente algún mensaje. Este siempre
    // debe ser tipo String, por lo que deberás usar las template literales para concatenar
    // un nuevo objeto Date de JavaScript
    res.writeHead(200);
    res.write(`${new Date()}`);
  }
  //● Paso 5: Terminar la consulta con el método “end” del parámetro res
  res.end();
};

const server = http.createServer(requestListener);
const port = 8080;
const host = 'localhost';

//Juntando las variables
server.listen(port, host, () => {
  console.log(`El Servidor se esta ejecutando en http://${host}:${port}`);
});
