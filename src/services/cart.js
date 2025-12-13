async function addItems(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => {
        return total + item.subtotal();
    }, 0);
}



async function deleteItemByIndex(userCart, index) {
    const deleteIndex = index - 1;  
    if (index >= 0 && index < userCart.length) {
        userCart.splice(index, 1);
    }
    return userCart;
}

async function deleteItemByName(userCart, name) {
   const index = userCart.findIndex(item => item.name === name);
   if (index !== -1) {
       userCart.splice(index, 1);
   }
   return userCart;

}

async function removeItems(userCart, index) {
    const deleteIndex = index - 1;  
    if (index >= 0 && index < userCart.length) {
        userCart[deleteIndex].quantity -= 1;
        if (userCart[deleteIndex].quantity === 0) {
            userCart.splice(deleteIndex, 1);
        }   
    }
    return userCart;

}



export { addItems, deleteItemByName, deleteItemByIndex, calculateTotal, removeItems };