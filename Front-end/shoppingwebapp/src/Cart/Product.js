// const productArray = [
//     {
//         id: "1",
//         title:"Coffee",
//         price: 4.99
//     },
//     {
//         id: "2",
//         title:"fan",
//         price: 200
//     },
//     {
//         id: "5",
//         title:"computer",
//         price: 20000
//     }
// ]
// function getproductdata(id){
//     let productData = productArray.find(product => product.id === id)
//     if(productData === undefined){
//         console.log("Sorry we dont have this " + id);
//         return undefined;
//     }
//     return productData;
// }
// export { productArray,getproductdata };

const productArray = [];

async function fetchProductData() {
    try {
      const response = await fetch('/cart/add/{product_id}');
      const data = await response.json();
  
      // Process the received data and update productArray
      const updatedProductArray = data.map(item => ({
        id: item.id.toString(),
        title: item.title,
        price: item.price,
      }));
  
      // Update productArray with the fetched data
      productArray.length = 0;
      productArray.push(...updatedProductArray);
      
      console.log('Product data updated:', productArray);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }
function getproductdata(id){
    let productData = productArray.find(product => product.id === id)
    if(productData === undefined){
        console.log("Sorry we dont have this " + id);
        return undefined;
    }
    return productData;
}
export { productArray,getproductdata };
