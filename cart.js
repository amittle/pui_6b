function itemFromTemplate(clone, item){
    let new_div = clone;
    let q = item.quant;
    let p = item.price;
    let g = item.glaze;
    subtotal += parseInt(p)
    console.log(toString(subtotal));
    var glazeChildNode = clone.querySelector('.glaze');
    glazeChildNode.textContent = g;
    console.log(glazeChildNode.textContent);


    return clone;
}

let inCart = JSON.parse(localStorage.getItem('storedCart'));
let cartTemp = document.getElementById('Listing_template');
let subtotal = 0;

for (var i = 0; i < inCart.length; i++){
    console.log("loop");
    itemObj = inCart[i];
    newItem = itemFromTemplate(cartTemp.content.cloneNode(true), itemObj);
    document.getElementById("cart_contents").appendChild(newItem);


}