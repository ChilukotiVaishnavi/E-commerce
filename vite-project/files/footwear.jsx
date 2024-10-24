import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';

const footwearItems = [
  { id: 1, image: '././images/footwear/foot (1).jpeg', title: 'Allen Solly Women Pumps with Bow Detail', price: '$29' },
  { id: 2, image: '././images/footwear/foot (2).jpeg', title: 'MANGO Women Stiletto Pumps', price: '$30' },
  { id: 3, image: '././images/footwear/foot (3).jpeg', title: 'MANGO Women Stiletto Pumps', price: '$31' },
  { id: 4, image: '././images/footwear/foot (4).jpeg', title: 'MANGO Women Stiletto Pumps', price: '$32' },
  { id: 5, image: '././images/footwear/foot (5).jpeg', title: 'MANGO Women Stiletto Pumps', price: '$33' },
  { id: 6, image: '././images/footwear/foot (6).jpeg', title: 'MANGO Women Stiletto Pumps', price: '$34' },
];

const Footwear = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <section id="footwear" style={styles.section}>
      <div className="container mt-5">
        <button onClick={() => navigate(-1)}>Back</button>
        <h1 className="text-center font-weight-normal">Foot Wear</h1>
      </div>
      <div className="container mt-4 d-flex mb-5">
        <div className="row">
          {footwearItems.map(item => (
            <div className="col-md-4 mt-5" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top w-100" alt={item.title} />
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="d-flex justify-content-between">
                    <p>{item.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundImage: `url("bgimg.jpeg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 'bold',
  },
  card: {
    padding: '1.5rem 2.5rem',
    textAlign: 'left',
    backgroundColor: 'aliceblue',
  },
  img: {
    width: '100%',
    height: '40%',
    objectFit: 'cover',
  },
};

export default Footwear;