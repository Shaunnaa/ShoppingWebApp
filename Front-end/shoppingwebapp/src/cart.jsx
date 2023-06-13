import React,{ useState} from "react";
import img5 from './img/search.png';
import img6 from './img/picnic 2.png';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Cart = (props) =>{
    const cart = useSelector((state)=> state.cart);
    return(
    
        <div className="bigcart">
          <label className="Textshopping">Shopping Cart</label>  
            <div className="search-bar"></div>
            <div className="orange-box"></div>
            <div className="background-white"></div>
            <div className="gray-above"></div>
            <div className="gray-below"></div>
            <img className="search-img" src={img5} alt="search"></img>
            <img className="basket" src={img6} alt="ตะกร้า"></img>
            
            <div className="cart-container">
                {/*No Items*/}
                {Cart.cartItems.length === 0 ?(
                    <div className="cart-empty">
                        <p>your cart is empty</p>
                        <div className="start-shopping">
                            <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="20" fill="currentColor" 
                            className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                                
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {Cart.cartItems?.map(cartItem =>(
                            <div className="cart-Items" key = {cartItem.id}>
                                <div className="cart-product">
                                    <img src={cartItem.image} alt={cartItem.name} />
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <p>{cartItem.desc}</p>
                                        <button>Remove</button>
                                    </div>
                                </div>
                                <div className="cart-product-price">${cartItem.price}</div>
                                <div className="cart-product-quatity">
                                    <button>-</button>
                                    <div className="count">{cartItem.cartQuantity}</div>
                                    <button>+</button>
                                </div>
                                <div className="cart-product-price">
                                    ${cartItem.price*cartItem.cartQuantity}
                                </div>
                            </div>
                        ))}  
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}
export default Cart;