/*  import {Card,Button,Form,Row,Col} from 'react-bootstrap'
   import { Cardcontext, Cartcontext,CartProvider } from './CartContext.js';
   import { useContext } from 'react';
// for dollar
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
   export default Cardshop;*/




import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { Cartcontext } from './CartContext.js';
import { useContext, useEffect, useState } from 'react';

const Cardshop = ({productId}) => {
  const cart = useContext(Cartcontext);
  const productquantity = cart.getquantity(productId);
 
  const [productData, setProductData] = useState(null);

  const fetchProductData = (productId) => {
    fetch(`/product/GetProducts/${productId}`)
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchProductData(productId);
  }, [productId]);

  const addToCart = () => {
    fetch(`/product/cart/add/product_id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response if necessary
       
        cart.addonetocart(productId); 
        console.log(cart.items);
        const productPrice = { originalPrice: productData.original_price, discountPrice: productData.discount_price };
        cart.updateProductPrice(productId, productPrice); // Add this line to update the price in the cart context
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const removeFromCart = () => {
    cart.removeonefromcart(productId);
  };
    
  const deleteFromCart = () => {
    cart.deletefromcart(productId);
  };

  return (
    <Card>
      <Card.Body>
        {productData && (
          <>
            <Card.Title>{productData.image}</Card.Title>
            <Card.Title>{productData.id}</Card.Title>
            <Card.Title>{productData.item_name}</Card.Title>
            <Card.Text>{productData.original_price} Bath</Card.Text>
            <Card.Text>{productData.discount_price} Bath</Card.Text>
          </>
        )}
        {productquantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productquantity}
              </Form.Label>
              <Col sm="6">
                <Button sm="6" onClick={addToCart} className="mx-2">+</Button>
                <Button sm="6" onClick={removeFromCart} className="mx-2">-</Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={deleteFromCart}>Remove from cart</Button>
          </>
        ) : (
          <Button variant="primary" onClick={addToCart}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Cardshop;
