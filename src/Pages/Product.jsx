import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
        <h2>Welcome to the Product Page</h2>
        <nav>
            <Link to="/phones">Phones</Link>
            <Link to="/laptops">Laptops</Link>
            <Link to="/camera">Camera</Link>
        </nav>
    </div>
  )
}

export default Product

// child Page  function
function Phones() {
    return <h3>Phones Category</h3>
}

function Laptops() {
    return <h3>Laptops Category</h3>
}

function Camera() {
    return <h3>Camera Category</h3>
}