// this is the line where you call the request in 'node'
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// you assign the url like a variable.
let API = "https://rickandmortyapi.com/api/character/";

// create a function to bring a info from the API
function fetchData(url_API, callBack) {
  // *Type of peticion to send
  let xhttp = new XMLHttpRequest();
  // tienes que definir tres parametros, el tercer valor hace referencia a que el callback este activado o sea (true)
  xhttp.open("GET", url_API, true);
  // siguiente paso es escuchar que va hacer esa funcion
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callBack(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${url_API}`);
        return callBack(error, null);
      }
      // detro del callback el primer valor que le vamos a pasar es el error y el segundo es la informacion
    }
  };
  xhttp.send();
}
// This is the way to do it when you need doing multiple.
// el primer parametro de la funcion es por defecto la ubicacion de donde vas a optener el dato. luego en la siguientes simulas un ciclo, vuelves a llamar tu funcion con esa misma funcion como parametro y esa se vuelve a hacer lo mismo que la primera. ubica un dato en la ubicacion que quedo por ultima vez en el codigo.
// asi se hace una escabacion mas profunda dentro de diferentes arrays, usando la ultima posicion como referencia para comenzar a ir mas profundo, sin necesidad de comenzar desde cero.
fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);

    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);

      fetchData(data3.residents[0], function (error4, data4) {
        if (error4) return console.error(error4);
        fetchData(API, function (nimierda, culiao) {
          if (nimierda) return console.error(nimierda);
          console.log(data1.info.count);
          console.log(data2.name);
          console.log(data3.dimension);
          console.log(data4.name);
          console.log(culiao.results[0].species);
        });
      });
    });
  });
});
// 671
// Rick Sanchez
// Dimension C-137
// Beth Smith
// Human
