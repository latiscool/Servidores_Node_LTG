// Mi primer servidor
// +++++++++++++++++++++

// Levantarun servidor que escuche las consultas por medio del puerto 8080, ¿Y cómo
// verificaremos que esté andando bien? Generamos un mensaje por consola que solo se
// ejecutará si el servidor es consultado, por lo que si vemos este mensaje por consola
// tendremos la certeza que todo salió bien

// ● Paso 1: Importar el módulo http en una variable.
const http = require('http');
const host = 'localhost';
const port = 8080;

// ● Paso 2: Usar el método createServer pasándole como parámetro una función
// callback con los siguientes parámetros: req, res

http
  .createServer((req, res) => {
    //   Paso 3: Dentro de la función callback imprime por consola el mensaje “¿Aló? ¿Quién
    // habla?
    console.log('¿Alo? ¿Quién habla?');
  })

  // Paso 4: Concatenar al método createServer el método “listen”, pasándole como
  // primer parámetro el número 8080, este número representará el puerto por el cual el
  // servidor estará oyendo peticiones, y como segundo parámetro una función de flecha
  // que imprima por consola el mensaje “Escuchando el puerto 8080”
  .listen(port, () =>
    console.log(`El Servidor se esta ejecutando en http://${host}:${port}`)
  );
