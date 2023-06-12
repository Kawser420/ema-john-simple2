import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    console.log(props)

    return (
        <div className='cart-info'>
            <h2 className='order-summary'>Order Summary</h2>
            <div className="items">
                <p className='cart'>Selected Items: </p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: </p>
                <h3>Grand Total: $</h3>
            </div>
        </div>
    );
};

export default Cart;