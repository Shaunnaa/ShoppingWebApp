import Button from 'react-bootstrap/Button'
import { Cartcontext } from './CartContext';
import { useState,useContext } from 'react';
import { getproductdata } from './Product';
function Cartproduct (props){
    const cart = useContext(Cartcontext);
    const id = props.id;
    const quantity = props.quantity;
    const data = getproductdata(id);
    return (
        <>
            <h3>{data.item_name}</h3>
            <p>{quantity} total</p>
            <p>{quantity*data.original_price.toFixed(2)} Bath</p>
            <Button sm="6" onClick={()=> cart.addonetocart(data.id)} className="mx-2" >+</Button>
            <Button sm="6" onClick={()=> cart.removeonefromcart(data.id)} className="mx-2">-</Button>
            <hr>
            </hr>
        </>
      );
}
 
export default Cartproduct;