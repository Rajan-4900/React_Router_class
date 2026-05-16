import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

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
                    <Outlet /> {/* this is used to render the child component of the parent component in the layout */}
                </main>

                <footer>
                    <p>2026 My Shop. All rights reserved.</p>
                </footer>
            </div>

        </>
    )
}

export default Layout