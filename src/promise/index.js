const vaPasarAlgo = () => {
  return new Promise((resueltis, rechazandin) => {
    if (true) {
      resueltis("lo mas melo");
    } else {
      rechazandin("pailis");
    }
  });
};

vaPasarAlgo()
  .then((resueltis) => console.log(resueltis))
  .then(() => console.log("que se dice la banda"))
  .catch((error) => console.error(error));

const vaPasarAlgo2 = () => {
  return new Promise((resulvelo, rechazalo) => {
    if (true) {
      resuelvo("la buena, lo lograste");
    } else {
      rechazalo("algo no salio bien");
    }
  });
};

const vaPasarAlgo3 = () => {
  return new Promise((melito, paila) => {
    true ? melito("hola que hace") : paila("como que fachaste crack");
  });
};

vaPasarAlgo3()
  .then((negrito) => console.log(negrito))
  // I think this is undefined, it means that doesnt have a value
  .then((negritos) => console.log(negritos))
  .then(() => console.log("negritos"))
  .catch((mal) => console.error(mal));
