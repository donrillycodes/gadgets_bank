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