import { covar, max, media, mediana, min, moda, ve } from './estatistica';

export const DeleguaModuloEstatistica = {
    max: {
        tipoRetorno: 'número',
        funcao: max,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' }
        ]
    },
    min: {
        tipoRetorno: 'número',
        funcao: min,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' }
        ]
    },
    media: {
        tipoRetorno: 'número',
        funcao: media,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' }
        ]
    },
    ve: {
        tipoRetorno: 'número',
        funcao: ve,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' }
        ]
    },
    covar: {
        tipoRetorno: 'número',
        funcao: covar,
        argumentos: [
            { nome: 'vetor1', tipo: 'vetor' },
            { nome: 'vetor2', tipo: 'vetor' }
        ]
    },
    mediana: {
        tipoRetorno: 'número',
        funcao: mediana,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' }
        ]
    },
    moda: {
        tipoRetorno: 'vetor',
        funcao: moda,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' }
        ]
    }
}
