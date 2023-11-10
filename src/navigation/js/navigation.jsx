import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import Catalog from "../../pages/catalog_page/catalog";
import Cart from "../../pages/cart_page/cart";
import Home from "../../pages/home_page/home";
import CardPage from "../../pages/card_page/card_page";
import Checkout from "../../pages/checkout_page/checkout";

import logo from "../../assets/images/logo.png";
import "../css/header.css";

const Navigation = () => (
  <Router>
    <header>
      <img src={logo} className="logo" alt="Logo" />
      <div className="header_links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "selected" : "not-selected"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? "selected" : "not-selected"
            }
          >
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "selected" : "not-selected"
            }
          >
            Cart
          </NavLink>
        </li>
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/card/:id" element={<CardPage />} />
    </Routes>
  </Router>
);

export default Navigation;
