// Create an array for products
let products = [
    {
        product_name: "Product_1",
        img_location: "images/image_1.jpg",
        product_id: "P_1",
        price: 13.99
    }, {
        product_name: "Product_2",
        img_location: "images/image_2.jpg",
        product_id: "P_2",
        price: 13.99
    }, {
        product_name: "Product_3",
        img_location: "images/image_3.jpg",
        product_id: "P_3",
        price: 13.99
    }];

// Making the html and showing via js
products.forEach(element => {
    let product_info = `<div class="card" id="${element.product_id}">`;
    document.getElementById("product_list").innerHTML += product_info;

    product_info = `<img class="product_image" src="${element.img_location}" alt="">`;
    document.getElementById(element.product_id).innerHTML += product_info;

    product_name = `<h4 id="${element.product_id}">${element.product_name}</h4>`;
    document.getElementById(element.product_id).innerHTML += product_name;

    product_price = `<h5>$${element.price}</h5>`;
    document.getElementById(element.product_id).innerHTML += product_price;

    product_purchase = `<button type="button" onclick="addtocart('${element.product_id}')">Add to Cart</button type="button">`;
    document.getElementById(element.product_id).innerHTML += product_purchase;

    product_info = `</div>`;
    document.getElementById("product_list").innerHTML += product_info;
});

let cart = [];

// Adding item to cart
function addtocart(product_id) {
    
    document.getElementById("cart_all").style.display="block";
    let cart_single = new Object();

    products.forEach(element => {
        if (product_id === element.product_id) {
            cart_single.product_name = element.product_name;
            cart_single.img_location = element.img_location;
            cart_single.product_id = element.product_id;
            cart_single.price = element.price;
            cart.push(cart_single);
            calculateTotal();
        }
    })
}

let total_price = 0;
let counter = 0;

// Calculate total cart value
function calculateTotal() {
    cart.forEach(element => {
        total_price1 = total_price + element.price;
        total_price = Math.round(total_price1*100)/100;
    })
    

    document.getElementById("cart").innerHTML = "";
    let div_cart_items = `<div class="cart_items" id="cart_items">`;
    document.getElementById("cart").innerHTML += div_cart_items;
    cart.forEach(element => {
        // console.log(element);

        let cart_item = "cart_item_" + counter;
        console.log(counter);
        div_cart_items = `<div class="cart_item" id="${cart_item}">`;
        document.getElementById("cart_items").innerHTML += div_cart_items;

        div_cart_items = `<div style="display:flex; align-items:center;">`;
        document.getElementById(cart_item).innerHTML += div_cart_items;

        div_cart_items = `<img src="${element.img_location}">`;
        document.getElementById(cart_item).innerHTML += div_cart_items;

        product_name = `<h4 >${element.product_name}</h4>`;
        document.getElementById(cart_item).innerHTML += product_name;

        product_price = `<h5>$${element.price}</h5>`;
        document.getElementById(cart_item).innerHTML += product_price;

        div_cart_items = `</div>`;
        document.getElementById(cart_item).innerHTML += div_cart_items;
        div_cart_items = `</div>`;
        document.getElementById("cart").innerHTML += div_cart_items;

        counter++;
    });
    div_cart_items = `<hr>`;
    document.getElementById("cart").innerHTML += div_cart_items;
    div_cart_items = `<h4 class="total_price_heading">Total Price: <span>$${total_price}</span></h4>`;
    document.getElementById("cart").innerHTML += div_cart_items;
}
