import React from "react"
import Home from "./Home"
import Products from "./Products"
import Product from "./Product"
import  {Routes, Route, Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <br/> 
        <Link to="/products">Products</Link>
      </nav>
  
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path=":productId" element={<Product />} />
        </Route> 
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>


    </div>
  )
}

export default App