// import {Card,Button,Form,Row,Col} from 'react-bootstrap'
// import { Cardcontext, Cartcontext,CartProvider } from './CartContext.js';
// import { useContext } from 'react';
// // $ for dollar
// const Cardshop = (props) => {
//     const product= props.product;
//     const cart = useContext(Cartcontext);
//     const productquantity = cart.getquantity(product.id);
//     console.log(cart.items);
//     return ( 
//         <Card>
//             <Card.Body>
//                 <Card.Title>{product.title}</Card.Title>
//                 <Card.Text>{product.price} Bath</Card.Text> 
//                 {productquantity > 0 ?
//                     <>
//                         <Form as={Row}>
//                             <Form.Label column="true" sm="6" >
//                                 In Cart: {productquantity}
//                             </Form.Label>
//                             <Col sm="6">
//                                 <Button sm="6" onClick={()=> cart.addonetocart(product.id)} className="mx-2" >+</Button>
//                                 <Button sm="6" onClick={()=> cart.removeonefromcart(product.id)} className="mx-2">-</Button>
//                             </Col>
//                         </Form>
//                         <Button variant="danger" onClick={()=> cart.deletefromcart(product.id)}>Remove from cart</Button>
//                     </> :
//                     <Button variant="primary" onClick={()=> cart.addonetocart(product.id)}>Add to cart</Button>
//                 }
               
//             </Card.Body>
//         </Card>
//      );
// }
//   //rowstyle
// export default Cardshop;




// import { Card, Button, Form, Row, Col } from 'react-bootstrap'
// import { Cardcontext, Cartcontext, CartProvider } from './CartContext.js';
// import { useContext, useEffect, useState } from 'react';

// const Cardshop = (props) => {
//     const product = props.product;
//     const cart = useContext(Cartcontext);
//     const productquantity = cart.getquantity(product.id);
//     console.log(cart.items);

//     const [productData, setProductData] = useState([]);

//     useEffect(() => {
//         // Fetch the product data from the API
//         fetch('/product/AllProducts')
//             .then(response => response.json())
//             .then(data => setProductData(data))
//             .catch(error => console.log(error));
//     }, []);

//     return (
//         <Card>
//             <Card.Body>
//                 {productData.length > 0 && (
//                     <>
//                         <Card.Title>{productData[product.id-1]?.name}</Card.Title>
//                         <Card.Text>{productData[product.id-1]?.original_price} Bath</Card.Text>
//                         <Card.Text>{productData[product.id-1]?.discount_price} Bath</Card.Text>
//                     </>
//                 )}
//                 {productquantity > 0 ? (
//                     <>
//                         <Form as={Row}>
//                             <Form.Label column="true" sm="6" >
//                                 In Cart: {productquantity}
//                             </Form.Label>
//                             <Col sm="6">
//                                 <Button sm="6" onClick={() => cart.addonetocart(product.id)} className="mx-2">+</Button>
//                                 <Button sm="6" onClick={() => cart.removeonefromcart(product.id)} className="mx-2">-</Button>
//                             </Col>
//                         </Form>
//                         <Button variant="danger" onClick={() => cart.deletefromcart(product.id)}>Remove from cart</Button>
//                     </>
//                 ) : (
//                     <Button variant="primary" onClick={() => cart.addonetocart(product.id)}>Add to cart</Button>
//                 )}
//             </Card.Body>
//         </Card>
//     );
// }

// export default Cardshop;


// import { Card, Button, Form, Row, Col } from 'react-bootstrap';
// import { Cartcontext } from './CartContext.js';
// import { useContext, useEffect, useState } from 'react';

// const Cardshop = ({ productId, fetchProductData }) => {
//   const cart = useContext(Cartcontext);
//   const productquantity = cart.getquantity(productId);
//   console.log(cart.items);

//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     fetchProductData(productId);
//     // Fetch the product data from the API
//     fetch(`/product/GetProducts/${productId}`)
//       .then(response => response.json())
//       .then(data => setProductData(data))
//       .catch(error => console.log(error));
//   }, [productId]);

//   return (
//     <Card>
//       <Card.Body>
//         {productData && (
//           <>
//             <Card.Title>{productData[productId]?.name}</Card.Title>
//             <Card.Text>{productData.original_price} Bath</Card.Text>
//             <Card.Text>{productData.discount_price} Bath</Card.Text>
//           </>
//         )}
//         {productquantity > 0 ? (
//           <>
//             <Form as={Row}>
//               <Form.Label column="true" sm="6">
//                 In Cart: {productquantity}
//               </Form.Label>
//               <Col sm="6">
//                 <Button sm="6" onClick={() => cart.addonetocart(productId)} className="mx-2">+</Button>
//                 <Button sm="6" onClick={() => cart.removeonefromcart(productId)} className="mx-2">-</Button>
//               </Col>
//             </Form>
//             <Button variant="danger" onClick={() => cart.deletefromcart(productId)}>Remove from cart</Button>
//           </>
//         ) : (
//           <Button variant="primary" onClick={() => cart.addonetocart(productId)}>Add to cart</Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }

// export default Cardshop;


import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { Cartcontext } from './CartContext.js';
import { useContext, useEffect, useState } from 'react';

const Cardshop = ({ productId }) => {
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

  return (
    <Card>
      <Card.Body>
        {productData && (
          <>
            <Card.Title>{productData && productData[productId]?.name}</Card.Title>
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
                <Button sm="6" onClick={() => cart.addonetocart(productId)} className="mx-2">+</Button>
                <Button sm="6" onClick={() => cart.removeonefromcart(productId)} className="mx-2">-</Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.deletefromcart(productId)}>Remove from cart</Button>
          </>
        ) : (
          <Button variant="primary" onClick={() => cart.addonetocart(productId)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cardshop;
