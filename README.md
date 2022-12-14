# Módulo de estatística para Delégua e JavaScript

Assim como Delégua é uma variação da linguagem Égua, esta biblioteca é uma variação da biblioteca Eguamat.

No entanto, diferente de Eguamat, que faz parte do código da linguagem Égua, essa biblioteca é distribuída independentemente da linguagem Delégua. Isso possibilita importar a biblioteca tanto para Delégua quanto para JavaScript. Basta para isso instalar a biblioteca usando o NPM. 

Além disso, Delégua deve ter uma automação para instalar o pacote quando for importado.

## Funções estatísticas

### `max()`
  
Encontra o elemento máximo em um vetor.

### `min()`

Encontra o elemento mínimo em um vetor.

### `media()`
  
Calcula a média dos elementos da lista.

### `mediana()`
  
Calcula a mediana de um vetor ou matriz.

### `moda()`
  
Calcula a moda de um vetor. A moda é o valor, ou valores, que são mais presentes em um conjunto.

## Exemplo de uso com TypeScript/JavaScript com ES Modules

```ts
import {max} from '@designliquido/delegua-estatistica';

console.log(max([1, 2, 3])); // Resultado: 3
```

## Exemplo de uso com JavaScript com CommonJS

```js
const { max } = require('@designliquido/delegua-estatistica');

console.log(max([1, 2, 3])); // Resultado: 3
```