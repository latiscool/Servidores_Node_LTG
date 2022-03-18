// Basado en el ejercicio para obtener la fecha de hoy, crea un servidor con Node que
// disponibilice una ruta /saludo que devuelva el mensaje “Hola! ¿Cómo estás?”.

const http = require('http');
const requestListener = (req, res) => {
  console.log(req.url);
  const url = req.url;
  if (url === '/saludo') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8;' });

    res.write(`Hola! ¿Cómo estás?`);
  }
  res.end(' - Mensaje Terminado');
};
const server = http.createServer(requestListener);

const port = 8080;
const host = 'localhost';

//final juntando
server.listen(port, host, () => {
  console.log(`Sevidor se esta ejecutando en http://${host}:${port};`);
});
