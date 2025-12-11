async function createItem(name , price, quantity) {
    // Logic to create a new item
    return { name, price, quantity,
        subtotal:() => price * quantity,
     };
}
export default createItem;