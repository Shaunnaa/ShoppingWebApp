// import {Button,Container,Navbar,Modal, NavbarBrand,NavDropdown, ModalBody } from 'react-bootstrap'
// import { useState,useContext } from 'react';
// import { Cardcontext, Cartcontext,CartProvider } from './CartContext.js';
// import Cartproduct from './Cartproduct.js';
// const Navbarcom = () => {
//     const cart = useContext(Cartcontext);
//     const [show, setShow] = useState(false);
//     const handleClose = () =>setShow(false);
//     const whatShow = () => setShow(true);
//     // const countitem = cart.items.reduce((sum,product) => sum+product.quantity,0);
//     const countitem = cart.getallitems(); // Get updated cart count
//     return ( 
//         <>
//         <Navbar expand="sm">
//             <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
//             <Navbar.Toggle></Navbar.Toggle> 
//             <Navbar.Collapse className="justify-content-end">
//                 <Button onClick={whatShow}>Cart: {countitem} Item</Button> {/* Display updated cart count */}
//             </Navbar.Collapse>

//         </Navbar>
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Shopping Cart</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 {countitem>0 ?
//                     <>
//                     <p>Items in your cart</p>
//                     {cart.items.map((currentProduct, idx)=>(
                       
//                         <Cartproduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></Cartproduct>
//                     ))}
//                     <h1>Total cost: {cart.gettotalcost().toFixed(2)}</h1>
//                     <Button variant="success">
//                         Purchase Item
//                     </Button>
//                     </>
//                     : <h1>Sorry, there is no item</h1>
//                 }
               
//             </Modal.Body>
//         </Modal>
//         </>
        
//      );
// }
 
// //tofixed(n) return number to string by n decimal
// export default Navbarcom;

import { Button, Container, Navbar, Modal, NavbarBrand, NavDropdown, ModalBody } from 'react-bootstrap'
import React, { useState, useContext, useEffect } from 'react';
import { Cartcontext, CartProvider } from './CartContext.js';
import Cartproduct from './Cartproduct.js';

const Navbarcom = () => {
  const [show, setShow] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [data, setData] = useState(null); // Add a state for the data

  const handleClose = () => setShow(false);
  const whatShow = () => setShow(true);

  const cart = useContext(Cartcontext);
  const { items, getallitems } = cart;
  const countitem = getallitems(); // Get the updated cart count
  

  // Fetch the data from the API
  useEffect(() => {
    fetch('/product/cart')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const updatedCartCount = data.reduce((total, product) => total + product.quantity, 0);
        setCartCount(updatedCartCount);
      })
      .catch((error) => console.log(error));
  
    // Update the cart count whenever it changes in the cart context
    const countItem = cart.getallitems();
    setCartCount(countItem);
  
    const updatedItems = cart.items.map((item) => {
      const productPrice = {
        originalPrice: item.price.originalPrice,
        discountPrice: item.price.discountPrice,
      };
      return { ...item, price: productPrice };
    });
    // setItems(updatedItems);
  }, [cart.items]);
  
  const [productData, setProductData] = useState(null);
  const [productId, setProductId] = useState(null);

  return (
    <>
      <Navbar expand="sm">
        <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={whatShow}>Cart: {countitem} Item</Button> {/* Display updated cart count */}
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {items.length > 0 ? (
            <>
              <p>Items in your cart</p>
              {items.map((currentProduct) => (
                <div key={currentProduct.id}>
                  <h3>{currentProduct.name}</h3>
                  <p>Original Price: {currentProduct.price.originalPrice} Bath</p>
                  <p>Discount Price: {currentProduct.price.discountPrice} Bath</p>
                  <p>Quantity: {currentProduct.quantity}</p>
                </div>
              ))}
              <Button variant="primary" onClick={handleClose}>
                Go to cart
              </Button>
            </>
          ) : (
            <p>No items in the cart</p>
          )}
        </Modal.Body>

        {/* <Modal.Body>
          {items.length > 0 ? (
            <>
              <p>Items in your cart</p>
              {items.map((currentProduct) => (
                <Cartproduct
                  key={currentProduct.id}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}
              <h1>Total cost: {cart.gettotalcost().toFixed(2)}</h1>
              <Button variant="success">Purchase Item</Button>
            </>
          ) : (
            <h1>Sorry, there are no items in the cart</h1>
          )}
        </Modal.Body> */}


      </Modal>
    </>
  );
}

export default Navbarcom;
