// import {Row,Col} from 'react-bootstrap'
// import { productArray,getproductdata } from './Product.js'
// import Cardshop from './Productcard.js';
// // <Row xs={1} md={3} className="g-4"> = one row 3 column-->
// const Store = () => {
//     return ( 
//         <>
//         <h1 align="center" className="p-4">Welcome to the store</h1>
//         <Row xs={1} md={3} className="g-4"> 
//             {productArray.map((product,idex)=> (
//                 <Col align="center" key={idex}>
//                     <Cardshop product={product}></Cardshop>
//                 </Col>
//                 ))}
//         </Row>
//         </>
        
//     );
// }
 
// export default Store;

import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getproductdata } from './Product.js';
import Cardshop from './Productcard.js';

import { CartProvider } from './CartContext.js';

const Store = () => {
  const [productIds, setProductIds] = useState([]);
  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetchProductIds();
  }, []);

  const fetchProductIds = async () => {
    try {
      // Fetch the product IDs from the backend
      const response = await fetch('/product/AllProducts');
      if (!response.ok) {
        throw new Error('Failed to fetch product IDs');
      }
      const data = await response.json();
      const ids = data.map((product) => product.id);
      setProductIds(ids);
    } catch (error) {
      console.error(error);
    }
  };

//   const fetchProductData = async (productId) => {
//     try {
//       const productData = await getproductdata(productId);
//       // Do something with the product data
//       console.log(productData);
//       return productData;
//     } catch (error) {
//       console.error(error);
//     }
//   };

    const fetchProductData = async (productId) => {
        try {
        const response = await fetch(`/product/GetProducts/${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProductData((prevState) => ({
            ...prevState,
            [productId]: data,
        }));
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div>
        <h1 align="center" className="p-4">Welcome to the store</h1>
        <Row xs={1} md={3} className="g-4">
            {productIds.map((productId, index) => (
            <Col align="center" key={index}>
                <CartProvider> {/* Wrap the Cardshop component with CartProvider */}
                    <Cardshop productId={productId} productData={productData} />
                </CartProvider>
            </Col>
            ))}
        </Row>
        </div>
    );
  
}

export default Store;

