import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from './product/product';
import Cart from './cart/cart';
import "./shop.css"
const shop = () => {
    const firstTen = fakeData.slice(0, 10);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState(firstTen);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Product product={pd} addToCart= {addToCart}> </Product> )
                    }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default shop;