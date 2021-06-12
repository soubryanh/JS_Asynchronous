const vaPasando = () => {
  return new Promise((resueltis, rechazandin) => {
    if (true) {
      resueltis("lo mas melo");
    } else {
      rechazandin("pailis");
    }
  });
};

vaPasando()
  .then((resueltis) => console.log(resueltis))
  .catch((error) => console.error(error));
