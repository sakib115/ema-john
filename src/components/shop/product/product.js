import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const product = (props) => {
    const { img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h1 className="product-name">{name}</h1><br />
                <p className="product-author"> by: {seller}</p>
                <p className="product-price" >${price}</p>
                <p className="product-author">only {stock} left in stock.  order soon</p>
                
                <button className="product-add-button" onClick={ () => props.addToCart(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
            

        </div>
    );
};

export default product;