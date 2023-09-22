"use strict";

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let valor = 0;
  let devuelve = function () {
    valor++;
    return valor;
  };
  return devuelve;
}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  // let miObjeto = {
  //   arg: 0,
  //   valor: function (miArgumento) {
  //     if (miArgumento != miObjeto.arg) {
  //       return cb(miArgumento);
  //     } else {
  //       return cache;
  //     }
  //   },
  // };

  // if (miObjeto.hasOwnProperty("arg")) {
  //   return miObjeto.valor;
  // } else {
  //   return;
  // }

  // return function valor(miArgumento) {
  //   return cb(miArgumento);
  // };

  const cache = {}; // Un objeto para almacenar los resultados

  return function (arg) {
    // Verifica si el argumento ya está en el caché
    if (cache.hasOwnProperty(arg)) {
      return cache[arg]; // Retorna el resultado del caché
    } else {
      const result = cb(arg); // Invoca la función cb con el argumento
      cache[arg] = result; // Almacena el resultado en el caché
      return result; // Retorna el resultado
    }
  };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
};
