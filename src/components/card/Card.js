import React from 'react'
import "./Card.css";

function Card({
    name,
    image,
    is_in_stock,
    price,
    final_price,
    weight_unit,
    weight
}) {
    // const is_in_stock = true
    // const name ="hair growth oil"
    // const price ="1499"
    // const final_price ="999"
    // const image = ""
    return (
        <div className="card">
            <a>
                <div className="image">
                    <img className="product-image" src={image}  alt="" />
                </div>
            </a>
            {/* link is to beused in place of achor tag for production ready product description page */}
            <div className="product-infoTab">
                <a className="productLink">
                    <div className="name"><h5>{name}</h5></div>
                    <h6>{weight}{weight_unit}</h6>
                    <div className="PriceBox">
                        <p className="SpecialPrice">₹{final_price}</p>
                        <p className="Price"> ₹{price} </p>
                    </div>
                </a>
                <button className={is_in_stock ? "addTocartButton" : "addTocartButton outofstock"}>{is_in_stock ? "ADD TO CART" : "Out OF STOCK" }</button>
            </div>
        </div>
    )
}
// ADD TO CART

export default Card
