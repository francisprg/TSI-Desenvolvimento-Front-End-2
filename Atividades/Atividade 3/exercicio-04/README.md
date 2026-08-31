## Exercício 04

No componente **ProductTable**, refatore a lógica para manter o mesmo padrão de UI. Independente da ordem dos produtos no array, ou seja, mesmo que se misturem frutas, vegetais ou se adicione outra categoria, os itens serão agrupados por categorias.

```javascript
const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];
```