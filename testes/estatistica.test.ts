import { covar, max, media, mediana, min, moda, ve } from "../estatistica";
import { EstatisticaErroEmTempoDeExecucao } from "../excecoes";

describe("max", () => {
  it("retorna -infinito se array for vazio", () => {
    expect(max(undefined, [])).toEqual(-Infinity);
  });

  it("calcula o maior valor presente no vetor", () => {
    expect(max(undefined, [10, 20, 55])).toEqual(55);
  });
});

describe("min", () => {
  it("retorna NaN se array for vazio", () => {
    expect(min(undefined, [])).toEqual(Infinity);
  });

  it("calcula o menor valor presente no vetor", () => {
    expect(min(undefined, [10, 20, 20, 55])).toEqual(10);
  });
});

describe("mediana", () => {
  it("retorna NaN se array for vazio", () => {
    expect(mediana(undefined, [])).toEqual(NaN);
  });

  it("calcula a mediana", () => {
    expect(mediana(undefined, [10, 20, 55])).toEqual(20);
  });
});

describe("moda", () => {
  it("retorna NaN se array for vazio", () => {
    expect(moda(undefined, [])).toEqual([]);
  });

  it("retorna array vazio se não há correspondência", () => {
    expect(moda(undefined, [10, 20, 55])).toEqual([]);
  });

  it("calcula a moda", () => {
    expect(moda(undefined, [10, 20, 20, 55])).toEqual([20]);
  });
});

describe("media", () => {
  it("atira exceção se vetor tiver valores nulos", () => {
    expect(() => media(undefined, [null, 1, null])).toThrow(
      EstatisticaErroEmTempoDeExecucao
    );
  });

  it.skip("atira exceção se vetor for vazio", () => {
    expect(() => media(undefined, [])).toThrow(
      EstatisticaErroEmTempoDeExecucao
    );
  });

  it("atira exceção se nenhum parâmetro for passado", () => {
    expect(() => media(undefined)).toThrow(EstatisticaErroEmTempoDeExecucao);
  });

  it("atira exceção se mais de um parametro for passado", () => {
    expect(() => media(undefined, [], [], [], [], [])).toThrow(
      EstatisticaErroEmTempoDeExecucao
    );
    expect(() => media(undefined, 1, 2, 3, 4, 5)).toThrow(
      EstatisticaErroEmTempoDeExecucao
    );
  });

  it.skip("atira exceção se o parametro passado não for um vetor", () => {
    expect(() => media(undefined, 1)).toThrow(EstatisticaErroEmTempoDeExecucao);
  });

  it("retorna a média", () => {
    expect(media(undefined, [1, 2, 3, 4, 5])).toEqual(3);
  });
});

describe("covar", () => {
  it("retorna a covariância entre as matrizes", () => {
    expect(covar(undefined, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual(2.5);
  });

  it("retorna ? se algum dos parametros não for passado", () => {
    expect(covar(undefined, [1, 2, null, null, 4, 5], [1, 2, 3, 4, 5])).toEqual(
      NaN
    );
  });
});

describe("ve", () => {
  it("retorna o valor da média aritimética de uma matriz", () => {
    expect(ve(undefined, [1, 2, 3, 4, 5])).toEqual("3.0000");
  });

  it("retorna o NaN se o vetor contem apenas um número", () => {
    expect(ve(undefined, [1])).toEqual("NaN");
  });

  it("retorna o valor da média aritimética de uma matriz de um número", () => {
    expect(ve(undefined, [[1], [2], [3], [4], [5]])).toEqual("3.0000");
  });
});
