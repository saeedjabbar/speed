import React from "react"
import Home from "./Home"
import Products from "./Products"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
      {/*
                Route between 2 components depending on the path:
                1. Home page ("/")
                2. Products Page ("/products")
                
                ** Home Page **
                • Can be a basic home page, maybe welcoming the user to your site and giving some background about yourself as a developer
                
                ** Products Page **
                • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
            */}

    </div>
  )
}

export default App