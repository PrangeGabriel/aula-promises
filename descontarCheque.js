//vamos criar uma Promise, para simular a analogia de descontar cheque
const descontarCheque = (diaAtual, diaCheque) =>
  new Promise((resolve, reject) => {
    if (diaAtual === diaCheque) {
      resolve(`cheque descontado no dia ${diaCheque}`);
    } else {
      reject(
        `Hoje é dia  ${diaAtual}, e o cheque tem q ser descontado no dia ${diaCheque}`
      );
    }
  });

descontarCheque(20, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(1, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(15, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(20, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));

descontarCheque(21, 20)
  .then((mensagem) => console.log(mensagem))
  .catch((error) => console.log(error));
