import {Button,Container,Navbar,Modal, NavbarBrand,NavDropdown, ModalBody } from 'react-bootstrap'
import { useState } from 'react';
const Navbarcom = () => {
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const whatShow = () => setShow(true);
    return ( 
        <>
        <Navbar expand="sm">
            <NavbarBrand href="/">Ecommerce Store</NavbarBrand>
            <Navbar.Toggle></Navbar.Toggle> 
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={whatShow}>Cart 0 Item</Button>
            </Navbar.Collapse>

        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>You are already shop</h1>
            </Modal.Body>
        </Modal>
        </>
        
     );
}
 

export default Navbarcom;