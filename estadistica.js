function calcularMediaAritmetica(lista) {
  //   let sumaLista = 0;
  //   for (let i = 0; i < lista.length; i++) {
  //     sumaLista = sumaLista + lista[i];
  //   }
  //   const promedio = sumaLista / lista.length;
  //   return promedio;

  //Funcion para hayar el promedio o media aritmetica de un arreglo
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  return sumaLista / lista.length;
}

function calcularMedianaAritmetica(lista) {
  lista = lista.sort((a, b) => a - b);

  if (lista.length % 2 === 1) {
    return lista[parseInt(lista.length / 2)];
  } else {
    return calcularMediaAritmetica([
      lista[parseInt(lista.length / 2) - 1],
      lista[parseInt(lista.length / 2)],
    ]);
  }
}

function calcularModaAritmetica(lista) {
  const listaCount = {};
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  const lista1Array = Object.entries(listaCount).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  const moda = lista1Array[lista1Array.length - 1];

  return moda;
}
