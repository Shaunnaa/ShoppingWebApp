const productArray = [
    {
        id: "1",
        title:"Coffee",
        price: 4.99
    },{
        id: "2",
        title:"fan",
        price: 200
    },
    {
        id: "3",
        title:"computer",
        price: 20000
    }
]
function getproductdata(id){
    let productData = productArray.find(product => product.id === id)
    if(productData === undefined){
        console.log("Sorry we dont have this " + id);
        return undefined;
    }
    return productData;
}
export { productArray,getproductdata };