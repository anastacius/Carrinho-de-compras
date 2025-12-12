async function addItems(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => {
        return total + item.subtotal();
    }, 0);
}



async function removeItems(userCart, index) {

}

async function deleteItem(userCart, name) {
   const index = userCart.findIndex(item => item.name === name);
   if (index !== -1) {
       userCart.splice(index, 1);
   }
   return userCart;

}

export { addItems, removeItems, deleteItem, calculateTotal };