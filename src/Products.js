import React from "react"
import productsData from "./productsData"

import { Routes, Route, Link } from "react-router-dom";


function Products() {    
    const productsList = productsData.map(
        product => (
            <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                    {product.name} - ${product.price}
                </Link>
            </div>
        )
    )
    return (
        <div>
            <h1>Products Page</h1>
            {productsList}
        </div>
    )
}

export default Products