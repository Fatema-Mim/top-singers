import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let singerName= '';
    
    for (const singer of cart) {
        total += singer.salary;
        singerName += singer.name+",";

    }
    return (
        <div>
            
            <p>Total Singer : {props.cart.length}</p>
            <p>Total Amount :$ {total}</p>
            <p>Singers : {singerName}</p>
            
        </div>
    );
};

export default Cart;