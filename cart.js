function itemFromTemplate(clone, item, index){
    let new_div = clone;
    let q = item.quant;
    let p = item.price;
    let g = item.glaze;
    subtotal += parseFloat(p.substring(1));
    subtotal = parseFloat(subtotal.toFixed(2));
    console.log(subtotal.toString());
    var glazeChildNode = clone.querySelector('.glaze');
    glazeChildNode.textContent = g;
    var priceChildNode = clone.querySelector('.price');
    priceChildNode.textContent = p;
    var quantChildNode = clone.querySelector('.quant');
    quantChildNode.textContent = q;
    var xChildNode = clone.querySelector('.remove_x');
    xChildNode.id = index.toString();

    return clone;
}

function removeCart(x_id) {
    console.log(x_id);
    let index = parseInt(x_id);
    let cart = JSON.parse(localStorage.getItem('storedCart'));
    delete cart[index];
    cart = cart.filter(elem => elem != undefined);
    localStorage.setItem('storedCart', JSON.stringify(cart));
    location.reload();
}

let inCart = JSON.parse(localStorage.getItem('storedCart'));
let cartTemp = document.getElementById('Listing_template');
let subtotal = 0;

for (var i = 0; i < inCart.length; i++){
    itemObj = inCart[i];
    newItem = itemFromTemplate(cartTemp.content.cloneNode(true), itemObj, i);
    document.getElementById("cart_contents").appendChild(newItem);


}

let tax = parseFloat((subtotal * 0.0634).toFixed(2))
let total = parseFloat((subtotal + tax).toFixed(2));

document.getElementById("cart_subtotal_val").textContent = "$" + subtotal.toString();
document.getElementById("cart_tax_val").textContent = "$" + tax.toString();


document.getElementById("cart_total_val").textContent = "$" + (parseFloat(subtotal + tax).toFixed(2)).toString();