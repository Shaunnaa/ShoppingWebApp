import {Button,Container,Navbar,Modal, NavbarBrand,NavDropdown, ModalBody } from 'react-bootstrap'
import { useState,useContext } from 'react';
import { Cardcontext, Cartcontext,CartProvider } from './CartContext.js';
import Cartproduct from './Cartproduct.js';
const Navbarcom = () => {
    const cart = useContext(Cartcontext);
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const whatShow = () => setShow(true);
    const countitem = cart.items.reduce((sum,product) => sum+product.quantity,0);
    return ( 
        <>
        <Navbar expand="sm">
            <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
            <Navbar.Toggle></Navbar.Toggle> 
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={whatShow}>Cart:  {countitem} Item</Button>
            </Navbar.Collapse>

        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {countitem>0 ?
                    <>
                    <p>Items in your cart</p>
                    {cart.items.map((currentProduct, idx)=>(
                       
                        <Cartproduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></Cartproduct>
                    ))}
                    <h1>Total cost: {cart.gettotalcost().toFixed(2)}</h1>
                    <Button variant="success">
                        Purchase Item
                    </Button>
                    </>
                    : <h1>Sorry, there is no item</h1>
                }
               
            </Modal.Body>
        </Modal>
        </>
        
     );
}
 
//tofixed(n) return number to string by n decimal
export default Navbarcom;