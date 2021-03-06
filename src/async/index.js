const hazAlgoAsync = () => {
  return new Promise((relax, pailis) => {
    true
      ? setTimeout(() => relax("la mera humildad"), 3000)
      : pailis(new Error("salvese quien pueda!!"));
  });
};

const hazAlgoMagico = async () => {
  const alguito = await hazAlgoAsync();
  console.log(alguito);
};

console.log("before");
hazAlgoMagico();
console.log("after");
// esta es la forma con la que usamos 'try' para poder controlar los posibles errores del codigo y mejorar en ese sentido la usabilidad avisando que se presento
const cortaFuergos = async () => {
  try {
    const algoMas = await hazAlgoAsync();
    console.log(algoMas);
  } catch (error) {
    console.error(error);
  }
};

console.log("before 1");
cortaFuergos();
console.log("after 1");
// before
// after
// before 1
// after 1
// la mera humildad
// la mera humildad
// Si una función regresa una promesa, podemos usar el keyword await, que le indica al navegador: “Espera a que la promesa se resuelva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto
