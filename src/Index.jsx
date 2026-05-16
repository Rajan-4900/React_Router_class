import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Phones from './Pages/Phones'
import Laptops from './Pages/Laptops'
import Camera from './Pages/Camera'



const Index = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* this "<Route /> Use to add the path to the search link in the browser" */}
                    <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />        {/* default child */}
                    <Route path='about' element={<About />} />

                    <Route path='product' element={<Product />} >
                    <Route path='phones' element={<Phones />} />
                    <Route path='laptops' element={<Laptops />} />
                    <Route path='camera' element={<Camera />} />
                    </Route>
                    </Route>

                </Routes>
            </Router>
        </>
    )
}

export default Index