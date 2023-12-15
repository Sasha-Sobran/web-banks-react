import React, { useState } from "react";
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
import SuccessPage from "../../pages/success/success_page";

import logo from "../../assets/images/logo.png";
import "../css/header.css";
import LoginPage from "../../pages/auth_pages/login_page";
import RegisterPage from "../../pages/auth_pages/register_page";
import { ProtectedRoute } from "./protected_route";

const Navigation = () => {
  const [isLogin, setIsLogin] = useState(false);

  const logOut = () => {
    localStorage.clear();
    setIsLogin(false);
    window.location.reload();
  };

  return (
    <Router>
      <header>
        <img src={logo} className="logo" alt="Logo" />
        <div className={isLogin ? "header_links" : "none"}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (localStorage.getItem("access_token")) {
                  setIsLogin(true);
                }
                return isActive ? "selected" : "not-selected";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) => {
                return isActive ? "selected" : "not-selected";
              }}
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => {
                return isActive ? "selected" : "not-selected";
              }}
            >
              Cart
            </NavLink>
          </li>
          <button className={isLogin ? "logout" : "none"} onClick={logOut}>
            log out
          </button>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/catalog"
          element={
            <ProtectedRoute>
              <Catalog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/card/:id"
          element={
            <ProtectedRoute>
              <CardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <SuccessPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
