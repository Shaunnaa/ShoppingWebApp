import {Row,Col} from 'react-bootstrap'
import { productArray,getproductdata } from './Product.js'
import Cardshop from './Productcard.js';
// <Row xs={1} md={3} className="g-4"> = one row 3 column-->
const Store = () => {
    return ( 
        <>
        <h1 align="center" className="p-4">Welcome to the store</h1>
        <Row xs={1} md={3} className="g-4"> 
            {productArray.map((product,idex)=> (
                <Col align="center" key={idex}>
                    <Cardshop product={product}></Cardshop>
                </Col>
                ))}
        </Row>
        </>
        
    );
}
 
export default Store;