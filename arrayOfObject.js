const products = [
    { id: 1, name: 'Apple ', price: 53600, inStock: true },
    { id: 2, name: 'deel', price: 75500, inStock: true },
    { id: 3, name: 'hp', price: 25500, inStock: true },
    { id: 4, name: 'mac', price: 145000, inStock: true },


]

const names = products.map(product => product.name)
// console.log(names);
const prices = products.map(prices => prices.price);
console.log(prices);