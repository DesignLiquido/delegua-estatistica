import { covar, max, media, mediana, min, moda, ve } from "../estatistica";
import { MatematicaErroEmTempoDeExecucao } from "../excecoes";
// import { covar, max, media, mediana, min, moda } from "../estatistica";

describe('max', () => {
  it('atira exceção se num for nulo', () => {
    expect(max([null, null, null])).toEqual(0);
  })

  it('retorna -infinito se array for vazio', () => {
    expect(max([])).toEqual(-Infinity);
  })


  it('calcula o maior valor presente no vetor', () => {
    expect(max([10, 20, 55])).toEqual(55)
  })
})

describe('min', () => {
  it('atira exceção se num for nulo', () => {
    expect(min([null, null, null])).toEqual(0);
  })

  it('retorna NaN se array for vazio', () => {
    expect(min([])).toEqual(Infinity);
  })
  it('calcula o menor valor presente no vetor', () => {
    expect(min([10, 20, 20, 55])).toEqual(10)
  })
})

describe('mediana', () => {
  it('atira exceção se num for nulo', () => {
    expect(mediana([null, null, null])).toEqual(null);
  })

  it('retorna NaN se array for vazio', () => {
    expect(mediana([])).toEqual(NaN);
  })


  it('calcula a mediana', () => {
    expect(mediana([10, 20, 55])).toEqual(20)
  })
})

describe('moda', () => {
  it('atira exceção se num for nulo', () => {
    expect(moda([null, null, null])).toEqual([NaN]);
  })

  it('retorna NaN se array for vazio', () => {
    expect(moda([])).toEqual([]);
  })

  it('retorna array vazio se não há correspondência', () => {
    expect(moda([10, 20, 55])).toEqual([])
  })

  it('calcula a moda', () => {
    expect(moda([10, 20, 20, 55])).toEqual([20])
  })
})

describe("media", () => {
  it('atira exceção se vetor tiver valores nulos', () => {
    expect(() => media([null, 1, null])).toThrow(MatematicaErroEmTempoDeExecucao);
  })

  it('atira exceção se array for vazio', () => {
    expect(() => media([])).toThrow(MatematicaErroEmTempoDeExecucao);
  })

  it('atira exceção se nenhum parametro for passado', () => {
    expect(() => media()).toThrow(MatematicaErroEmTempoDeExecucao);
  })

  it('atira exceção se mais de um parametro for passado', () => {
    expect(() => media([], [], [], [], [])).toThrow(MatematicaErroEmTempoDeExecucao);
    expect(() => media(1, 2, 3, 4, 5)).toThrow(MatematicaErroEmTempoDeExecucao);
  })

  it('atira exceção se o parametro passado não for um vetor', () => {
    expect(() => media(1)).toThrow(MatematicaErroEmTempoDeExecucao);
  })

  it('retorna a media', () => {
    expect(media([1, 2, 3, 4, 5])).toEqual(3);
  })
})

describe('covar', () => {
  it('retorna a covariância entre as matrizes', () => {
    expect(covar([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual(2.5)
  })

  it('retorna ? se algum dos parametros não for passado', () => {
    expect(covar([1, 2, null, null, 4, 5], [1, 2, 3, 4, 5])).toEqual(NaN);
  })
})

describe('ve', () => {
  it('retorna o valor da média aritimética de uma matriz', () => {
    expect(ve([1, 2, 3, 4, 5])).toEqual("3.0000");
  })

  it('retorna o NaN se o vetor contem apenas um numero', () => {
    expect(ve([1])).toEqual("NaN");
  })
  
  it('retorna o valor da média aritimética de uma matriz de um numero', () => {
    expect(ve([[1], [2], [3], [4], [5]])).toEqual("3.0000");
  })
})
