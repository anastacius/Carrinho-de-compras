import  createItem  from './services/item.js';

const carrinho = [];

const item1 = await createItem('Banana', 2.5, 4);
carrinho.push(item1);

const item2 = await createItem('Maçã', 3.0, 2);
carrinho.push(item2);

console.log('Carrinho de Compras:');
carrinho.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - Preço: R$${item.price.toFixed(2)} - Quantidade: ${item.quantity} - Subtotal: R$${item.subtotal().toFixed(2)}`);
});

console.log('Total do Carrinho: R$' + carrinho.reduce((total, item) => total + item.subtotal(), 0).toFixed(2));