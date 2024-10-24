import React from "react";
import "./mx.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import title from "./title.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="header">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#D14D72" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={title}
              alt="Nova"
              width="90"
              height="90"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#features">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-link nav-link dropdown-toggle"
                  id="productsDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Products</b>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="productsDropdown"
                >
                  <li className="dropdown-item">
                    <Link to="/sarees" className="text-decoration-none" style={{ color: 'black' }}>
                      Sarees
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/shirt" className="text-decoration-none" style={{ color: 'black' }}>
                      Shirts
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/tshirt" className="text-decoration-none" style={{ color: 'black' }}>
                      T-shirts
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/skirts" className="text-decoration-none" style={{ color: 'black' }}>
                      Skirts
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/sports" className="text-decoration-none" style={{ color: 'black' }}>
                      Sports
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/footwear" className="text-decoration-none" style={{ color: 'black' }}>
                      Footwear
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/hand" className="text-decoration-none" style={{ color: 'black' }}>
                      Handbags
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/home" className="text-decoration-none" style={{ color: 'black' }}>
                      Back
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <Link to="/cart" className="text-decoration-none nav-link active" style={{ color: 'black' }}>
                      Cart
                    </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#footer">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;