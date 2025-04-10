import { aprox } from "@designliquido/delegua-matematica";
import { somaElementosMatriz } from "@designliquido/delegua-matematica/algebra-linear";

import { EstatisticaErroEmTempoDeExecucao } from "./excecoes";

/**
 * Encontra o elemento máximo em um vetor.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {inteiro[]} vetor Um vetor de números inteiros.
 * @returns O maior número encontrado em um vetor.
 */
export function max(_: any, vetor: Array<number>): number {
  return Math.max.apply(null, vetor);
}

/**
 * Encontra o elemento mínimo em um vetor.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {inteiro[]} vetor Um vetor de números inteiros.
 * @returns O menor número encontrado em um vetor.
 */
export function min(_: any, vetor: Array<number>): number {
  return Math.min.apply(null, vetor);
}

/**
 * Calcula a média dos elementos da lista.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {numero[]} vetores Um vetor de números.
 * @returns O cálculo da média dos elementos.
 */
export function media(_: any, ...vetores: any) {
  const larguraArgumentos = Object.keys(arguments).length;

  if (larguraArgumentos <= 0) {
    throw new EstatisticaErroEmTempoDeExecucao(
      null, //this.token,
      "Você deve fornecer um parâmetro para a função."
    );
  }

  if (larguraArgumentos > 2) {
    throw new EstatisticaErroEmTempoDeExecucao(
      null, //this.token,
      "A função recebe apenas um parâmetro."
    );
  }

  if (!Array.isArray(vetores)) {
    throw new EstatisticaErroEmTempoDeExecucao(
      null, //this.token,
      "Você deve fornecer um parâmetro do tipo vetor."
    );
  }

  if (vetores.length <= 0) {
    throw new EstatisticaErroEmTempoDeExecucao(
      null, //this.token,
      "Vetor vazio. Você deve fornecer ao menos um valor ao vetor."
    );
  }

  const vetorCombinado = vetores.reduce((acc, curr) => acc.concat(curr), []);
  // Valida se o array contém apenas valores do tipo número.
  vetorCombinado.forEach((item: any) => {
    if (typeof item !== "number") {
      throw new EstatisticaErroEmTempoDeExecucao(
        null, //this.token,
        "Você deve fornecer um vetor contendo apenas valores do tipo número."
      );
    }
  });

  // Soma todos os itens.
  const valoresSomados = (vetorCombinado as number[]).reduce(
    (acumulador, itemAtual) => acumulador + itemAtual,
    0
  );

  // Faz o cáculo da média em si e retorna.
  return valoresSomados / vetorCombinado.length;
}

/**
 * Calcula a média aritimética de uma matriz.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number[] | Array<number[]>} vetor Um vetor de vetores ou um vetor de números.
 * @returns O valor da média aritimética.
 */
export function ve(_: any, vetor: Array<any>): any {
  if (vetor.length === 1) {
    return aprox(_, somaElementosMatriz(_, vetor) / vetor[0].length, 4);
  } // a is a row array
  if (vetor[0].length === 1) {
    return aprox(_, somaElementosMatriz(_, vetor) / vetor.length, 4);
  } // a is a column array
  if (vetor[0] && vetor.length) {
    return aprox(_, somaElementosMatriz(_, vetor) / vetor.length, 4);
  }
}

/**
 * Calcula a covariância de duas matrizes.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {numero[]} array1 Um vetor de números.
 * @param {numero[]} array2 Um vetor de números.
 * @returns O valor da coariância das duas matrizes.
 */
export function covar(_: any, array1: Array<any>, array2: Array<any>): any {
  var u = ve(_, array1);
  var v = ve(_, array2);
  var arr1Len = array1.length;
  var sq_dev = new Array(arr1Len);
  for (var i = 0; i < arr1Len; i++)
    sq_dev[i] = (array1[i] - u) * (array2[i] - v);
  return somaElementosMatriz(_, sq_dev) / (arr1Len - 1);
}

/**
 * Calcula a mediana de um vetor ou matriz.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {numero[]} vetor Vetor de números.
 * @returns Número com o valor da mediana.
 */
export function mediana(_: any, vetor: Array<number>): number {
  vetor.sort(function (a, b) {
    return a - b;
  });
  const meio = vetor.length / 2;
  return meio % 1 ? vetor[meio - 0.5] : (vetor[meio - 1] + vetor[meio]) / 2;
}

/**
 * Calcula a moda de um vetor. A moda é o valor, ou valores, que mais são
 * presentes em um conjunto.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {numero[]} vetor O conjunto a ser avaliado.
 * @returns O novo conjunto com os valores da moda.
 * @see https://pt.wikipedia.org/wiki/Moda_(estat%C3%ADstica)
 */
export function moda(_: any, vetor: Array<number>): number[] {
  const vetorDeObjetos = vetor.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  const counter = [];
  Object.keys(vetorDeObjetos).filter(function (posicao) {
    counter.push(vetorDeObjetos[posicao]);
  });
  const max = Math.max.apply(null, counter);

  if (max === 1) {
    return [];
  }

  return Object.keys(vetorDeObjetos)
    .filter(function (posicao) {
      return vetorDeObjetos[posicao] === max ? vetorDeObjetos[posicao] : null;
    })
    .map((item) => Number(item));
}
