import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    console.log(props)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-info'>
            <h2 className='order-summary'>Order Summary</h2>
            <div className="items">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total.toFixed(2)}</p>
                <p>Total Shipping Charge: ${shipping.toFixed(2)}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;