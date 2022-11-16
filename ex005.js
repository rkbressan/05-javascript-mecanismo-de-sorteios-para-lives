//Criar um mecanismo de sorteios que aumente a chance dos seguidores mais fiéis
//Baseado em horas, se for free
//O número de horas é = minutos e é sempre arredondado para cima
//181min = 4h, 239min = 4h, 180min = 3h

function calculaPorcentagemSorteio(assinante, minutosAssistidos) {
  let horas = minutosAssistidos.map((cdTime, idx) => {
    //Se for assinante
    if (assinante[idx]) {
      return Math.ceil(cdTime / 60) * 2;
      //Se não for assinante
    } else {
      return Math.ceil(cdTime / 60);
    }
  });

  let soma = horas.reduce((total, numeroDeHoras) => {
    return total + numeroDeHoras;
  }, 0);

  let arrReturn = [];
  for (let x = 0; x < horas.length; x++) {
    arrReturn.push(Math.round((horas[x] * 100) / soma));
  }
  return arrReturn;
}
