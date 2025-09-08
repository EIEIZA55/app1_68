// react/app1/src/router3.js
import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import './products'
import './navlink.css'
import Products from './products'
import Home from './home'
import Member from './member'

export default function Router3() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
        >
          Home
        </NavLink>
        &nbsp;
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
        >
          Products
        </NavLink>
        &nbsp;
        <NavLink
          to="/member"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
        >
          Member
        </NavLink>
        &nbsp;
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active_menu' : 'menu')}
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : '' })}
        >
          Contact Us
        </NavLink>
      </nav>

      <div style={{ margin: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/member" element={<Member />} />
          <Route
            path="/contact"
            element={<div style={{ textAlign: 'center' }}>Contact Page</div>}
          />
          <Route
            path="*"
            element={<div style={{ textAlign: 'center' }}>Page Not Found</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
