function initMemory() {
    console.log("initMemory")

    const storedCart = JSON.parse(localStorage.getItem('storedCart'));
    let cart;

    if(storedCart == null) {
        console.log("init cart")
        cart = [];
    }else{
        cart = storedCart;
    }
    return cart;
}


function switchGlaze() {
    let obj = document.getElementById("glaze_value");
    let glaze_value = obj.textContent;
    console.log(glaze_value);
    if (glaze_value == "NONE"){
        obj.textContent = "Sugar";
    }else if (glaze_value == "Sugar"){
        obj.textContent = "Vanilla";
    }else if (glaze_value == "Vanilla"){
        obj.textContent = "Choco";
    }else {
        obj.textContent = "NONE";
    }

}

function switchQuant() {
    let obj_q = document.getElementById("quant_value");
    let obj_p = document.getElementById("price");
    let quant_value = obj_q.textContent;
    if (quant_value == "1"){
        obj_q.textContent = "3";
        obj_p.textContent = "$10.99";
    }else if (quant_value == "3"){
        obj_q.textContent = "6";
        obj_p.textContent = "$20.99";
    }
    else if (quant_value == "6"){
        obj_q.textContent = "12";
        obj_p.textContent = "$44.99";
    }else {

        obj_q.textContent = "1";
        obj_p.textContent = "$3.99";
    }
}

function addCart() {
    let obj_g = document.getElementById("glaze_value").innerText;
    let obj_q = document.getElementById("quant_value").innerText;
    let obj_p = document.getElementById("price").innerText;
    let product = {quant: obj_q, price: obj_p, glaze: obj_g};
    cart.push(product);
    localStorage.setItem('storedCart', JSON.stringify(cart));

    location.href = "index.html";

}

let cart = initMemory();

localStorage.setItem('storedCart', JSON.stringify(cart));

let cart_size = document.getElementById("cart_num");


cart_size.innerText = cart.length;