import React from 'react';
import './cart.css'
const cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total+ product.price;
    }
    let shipping = 12.6;
    let tax = total / 10;
    if (total>35) {
        shipping = 0;
    }
    else if (total>15) {
        shipping = 4.9 ; 
    }
    return (
        <div>
            <h1> Order summary</h1>
            <p>items ordered:{cart.length}</p>
            <p>shipping cost: ${shipping}</p>
            <p>vat+tax: ${Math.ceil(tax)}</p>
            <p>total:${total}</p>
        </div>
    );
};

export default cart;