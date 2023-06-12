import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Seller: {seller}</p>
                <p>Price: ${price}</p>
                <p><small>Ratting: {ratings} star</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-name'>
                <p className='btn-cart-name'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;