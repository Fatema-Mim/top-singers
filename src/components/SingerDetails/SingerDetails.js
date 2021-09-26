import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingerDetails.css';


const SingerDetails = (props) => {
    const { name, age, hometown, salary, img, nationality } = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="card">
            <img className="singer-img" src={img} alt="" />
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>Per Songe Charge : ${salary}</p>
            <p>Lives in : {hometown}</p>
            <p>Nationality : {nationality}</p>
            <button  onClick={() => props.handleAddToCart(props.singer)} className="cart-btn"> {cartIcon} add to cart</button>
        </div>
    );
};

export default SingerDetails;