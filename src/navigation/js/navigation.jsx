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

import logo from "../../assets/images/logo.png";
import "../css/header.css";

const Navigation = () => (
  <Router>
    <header>
      <img src={logo} className="logo" alt="Logo" />
      <div className="header_links">
        <li>
          <NavLink
            exact
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
            exact
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
            exact
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
      <Route path="/" Component={Home} />
      <Route path="/catalog" Component={Catalog} />
      <Route path="/cart" Component={Cart} />
    </Routes>
  </Router>
);

export default Navigation;