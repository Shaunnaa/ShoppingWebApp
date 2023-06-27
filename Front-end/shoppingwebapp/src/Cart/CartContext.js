import { createContext,useState } from "react";
import { productArray,getproductdata } from "./Product.js";

export const Cartcontext = createContext( {
    items: [], 
    getquantity: () => {}, 
    addonetocart: () => {},
    removeonefromcart: () => {},
    deletefromcart: () => {},
    gettotalcost: () => {},
    getallitems: () => {},
    updateProductPrice: () => {} // Add this line to the context
});
export function CartProvider({children}){
    const [nowproduct,setproduct] = useState([]);
    function getquantity(id){
        const quantity = nowproduct.find(product  => product.id === id)?.quantity
        if(quantity===undefined){
            return 0;
        }
        return quantity;
    }
    function addonetocart(id){
        const quantity = getquantity(id);
        if(quantity===0){ //product not in cart
            setproduct(
                [...nowproduct,{
                    id:id, quantity:1
                }]
            )
        }else{ // product in cart
            setproduct(
                nowproduct.map(
                    product=> product.id ===id
                    ?{...product,quantity: product.quantity+1}
                    :product
                )
            )
        }
        return quantity;
    }
    function deletefromcart(id){
        setproduct(
            nowproduct=> nowproduct.filter(current=> {return current.id != id})

        )
    }
    function removeonefromcart(id){
        const quantity = getquantity(id);
        if(quantity==1){
            deletefromcart(id);
        }else{
            setproduct(
              
                nowproduct.map(
                    product=> product.id ===id?{...product,quantity: product.quantity-1}:product
                )
            )
        }
    } 
    function gettotalcost(){
        let total= 0;
        nowproduct.map((cartItem) => {
            const productdata=getproductdata(cartItem.id);
            total+=(productdata.price * cartItem.quantity);
        });
        return total;

    }
    function getallitems(){
        let totalitems= 0;
        nowproduct.map((cartItem) => {
           
            totalitems+=(cartItem.quantity);
        });
        return totalitems;

    }
    function updateProductPrice(id, price) {
        setproduct((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === id) {
              return { ...product, price: price };
            }
            return product;
          });
        });
      }
    const contextvalue={
        items: nowproduct, 
        getquantity, 
        addonetocart,
        removeonefromcart,
        deletefromcart,
        gettotalcost,
        getallitems,
        updateProductPrice // Add this line to the context value
    }
    
    return (
        <Cartcontext.Provider value={contextvalue}>
            {children}
        </Cartcontext.Provider>
    )
}
export default CartProvider;
/*context (cart,addtocart, removecart)
Provider -> gives the react app access to all the things in your context*/