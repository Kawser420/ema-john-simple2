import React, { useEffect, useState } from 'react';
import './Shop.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Product: {products.length}</h2>
                {
                    products.map(product => <Product
                         
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Product;