// Un callback es una funcion que recibe como argumento otra funcion.
function sum(num1, num2) {
  return num1 - num2;
}

function calc(num1, num2, callback) {
  return callback(num2, num1);
}

console.log(calc(2, 3, sum));

// En esta ocasion vamos a controlar que es lo que se va a retornar primero.
// Pare eso podemos utilizar 'setTimeOut'

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}
date(printDate);
