import React from 'react'
import { Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div>
                <header>
                    <h1>My Shop</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/about">About</Link>
                    </nav>
                </header>

                <main>
                </main>

                <footer>
                    <p>2026 My Shop. All rights reserved.</p>
                </footer>
            </div>

        </>
    )
}

export default Layout