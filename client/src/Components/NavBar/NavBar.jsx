import React from 'react'
import Home from '../Home/Home'
import Ordered from '../Ordered/Ordered'
import Cart from '../Cart/Cart'
import About from '../About/About'
import Signup from '../Signup/Signup'
import Error from '../Error/Error'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
    return (
        <div>
            <BrowserRouter>
        <div className='navbar bg-light p-4 container-fluid'>
                <div className="left">
                    <h1 className='title'>E-Commerce</h1>
                </div>
                <div className="right">
                    <Link to={'/'} className={'Links p-4 text-dark'}>Home</Link>
                    <Link to={'/ordered'} className={'Links p-4 text-dark'}>Ordered</Link>
                    <Link to={'/cart'} className={'Links p-4 text-dark'}>Cart</Link>
                    <Link to={'/about'} className={'Links p-4 text-dark'}>About</Link>
                    <Link to={'/signup'} className={'Links p-4 text-dark'}>SignUp</Link>
                </div>
        </div>
        <div className="body">
            <Routes>
                <Route element={<Home/>} path={'/'}/>
                <Route element={<Ordered/>} path={'/ordered'}/>
                <Route element={<Cart/>} path={'/cart'}/>
                <Route element={<About/>} path={'/about'}/>
                <Route element={<Signup/>} path={'/signup'}/>
                <Route element={<Error/>} path={'*'}/>
            </Routes>
        </div>
            </BrowserRouter>
        </div>
    )
}

export default NavBar