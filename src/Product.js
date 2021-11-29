import React from "react"
import productsData from "./productsData"
import { useParams, Outlet} from "react-router-dom"

function Product() {
  let {productId} = useParams()
  
  const product = productsData.find(product => product.id === parseInt(productId))
  console.log(typeof productId);

  return (
    <div>
      <h1>Product</h1>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Outlet/>
    </div>
    
  )
}

export default Product