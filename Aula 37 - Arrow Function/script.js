const marcas = [
  {ìd:1, nome:'a'},
  {ìd:2, nome:'b'}
];

console.log(marcas.find(marca => marca.nome === 'a'));
// console.log(marcas.find(() => marca.nome === 'a'))