import React from 'react';
import './mx.css';
import shop from './shop.jpeg';

function Header() {
  return (
    <section className="body">
      <div className="container-fluid colored">
        <div className="row">
          <div className="col-lg-6 col-md-4 mas">
            <h1 className="big-head">
              <b>Explore the </b><br></br>
              <b> latest fashion at</b><br></br>
              <b>Resonable price</b>
            </h1>
            <div className="b">
              <a href="signin.html">
                <button type="button" className="btn btn-dark btn-lg down-btn">
                  Sign Up
                </button>
              </a>
              <a href="login.html">
                <button type="button" className="btn btn-dark btn-lg down-btn">
                  Log In
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <img className="img-t" src={shop} alt="Shop" width="600" height="500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
