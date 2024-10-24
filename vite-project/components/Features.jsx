import React from 'react';
import './mx.css';
import shonow3 from './shonow3.jpeg';
import shonow2 from './shonow2.jpeg';
import shonow1 from './shonow1.jpeg';

function Features() {
  return (
    <section id="features">
      <div className="container-fluid row">
        <div className="f-box col-lg-4">
          <img className="img-f" src={shonow3} alt="Free Delivery" width="300" height="200" />
          <h3>Free Delivery</h3>
          <p>Get exciting fashion at your doorstep without any extra delivery charges.</p>
        </div>
        <div className="f-box col-lg-4">
          <img className="img-f" src={shonow2} alt="Vast Collection" width="300" height="200" />
          <h3>Vast Collection</h3>
          <p>We have all the trendy outfits that will catch your eyes in no time.</p>
        </div>
        <div className="f-box col-lg-4">
          <img className="img-f" src={shonow1} alt="Resonable Price" width="300" height="200" />
          <h3>Resonable Price</h3>
          <p>All the items are affordable and we provide additional discount coupons after every purchase.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
