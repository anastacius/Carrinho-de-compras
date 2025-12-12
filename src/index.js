import  createItem  from './services/item.js';
import * as cartService from './services/cart.js';
const carrinho = [];
const wishList = [];

const item1 = await createItem('Banana', 2.5, 8);
carrinho.push(item1);

const item2 = await createItem('Maçã', 3.0, 20);
carrinho.push(item2);

await printCart(carrinho);

await cartService.addItems(wishList, await createItem('Laranja', 4.0, 30));
await cartService.addItems(carrinho, await createItem('esponja', 3.99, 50));

await printCart(carrinho);

cartService.deleteItem(carrinho, 'Maçã');

await printCart(carrinho);


async function printCart(cart) {
    console.log('\nCarrinho de Compras:');
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - Preço: R$${item.price.toFixed(2)} - Quantidade: ${item.quantity} - Subtotal: R$${item.subtotal().toFixed(2)}`);
    });
    cartService.calculateTotal(cart).then(total => {
        console.log('Total do Carrinho: R$' + total.toFixed(2));
    });
}