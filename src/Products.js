import React from "react"
import productsData from "./productsData"
import { Link, Outlet } from "react-router-dom";


function Products() {    
    const productsList = productsData.map(
        product => (
            <div key={product.id}>
                <Link to={`${product.id}`} >{product.name} - ${product.price}</Link>
            </div>
        )
    )
    return (
        <div>
            <div>
                <h1>Products Page</h1>
                {productsList}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Products