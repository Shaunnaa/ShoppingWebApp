import {Card,Button,Form,Row,Col} from 'react-bootstrap'
import { Cardcontext, Cartcontext,CartProvider } from './CartContext.js';
import { useContext } from 'react';
// $ for dollar
const Cardshop = (props) => {
    const product= props.product;
    const cart = useContext(Cartcontext);
    const productquantity = cart.getquantity(product.id);
    console.log(cart.items);
    return ( 
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price} Bath</Card.Text> 
                {productquantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6" >
                                In Cart: {productquantity}
                            </Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={()=> cart.addonetocart(product.id)} className="mx-2" >+</Button>
                                <Button sm="6" onClick={()=> cart.removeonefromcart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={()=> cart.deletefromcart(product.id)}>Remove from cart</Button>
                    </> :
                    <Button variant="primary" onClick={()=> cart.addonetocart(product.id)}>Add to cart</Button>
                }
               
            </Card.Body>
        </Card>
     );
}
  //rowstyle
export default Cardshop;