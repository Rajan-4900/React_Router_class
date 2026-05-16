import React from 'react';
import { Link , Outlet} from 'react-router-dom';

const Product = () => {
  return (
    <div>
        <h2>Welcome to the Product Page</h2>
        <nav>
            <Link to="phones">Phones</Link>
            <Link to="laptops">Laptops</Link>
            <Link to="camera">Camera</Link>
        </nav>
        <Outlet /> {/* this is used to render the child component of the parent component in the layout */}
    </div>
  )
}

export default Product
