import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingerDetails from '../SingerDetails/SingerDetails';
import './Singer.css';

const Singer = () => {
    const [singers, setSinger] = useState([]);
    const[cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./singers.JSON')
        .then(res=>res.json())
        .then(data=> setSinger(data))
    },[])
    const handleAddToCart =(singer)=>{
        const newCart = [...cart, singer];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="allSinger">
                <h2 className="total-singer">Total Singer : {singers.length}</h2>
                <div className="singer-card">
                {
                    singers.map(singer => <SingerDetails
                        key={singer.name}
                        singer={singer}
                        handleAddToCart={handleAddToCart}
                        ></SingerDetails>)
                }
                </div>
            </div>
            <div className="selectedSinger">
                <h2>Selected Singer</h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Singer;