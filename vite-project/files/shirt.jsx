import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const shirtItems = [
  { id: 1, image: "././images/shirts/shirt1.jpeg", title: "STREET 9 Women Lavender Solid Oversize Shirt", price: "$12" },
  { id: 2, image: "././images/shirts/shirt2.jpeg", title: "STREET 9 Women Pink Sheer Printed Casual Shirt", price: "$13" },
  { id: 3, image: "././images/shirts/shirt3.jpeg", title: "ANI Women Black Standard Sheer Casual Shirt", price: "$11" },
  { id: 4, image: "././images/shirts/shirt4.jpeg", title: "ANI Women Black Standard Sheer Casual Shirt", price: "$14" },
  { id: 5, image: "././images/shirts/shirt5.jpeg", title: "ANI Women Black Standard Sheer Casual Shirt", price: "$14" },
  { id: 6, image: "././images/shirts/shirt6.jpeg", title: "DressBerry Women Bright Yellow Solid Pockets Please Shirt", price: "$12" },
  { id: 7, image: "././images/shirts/shirt7.jpeg", title: "The Roadster Lifestyle Co Women Blue & Off-White Regular Fit Checked Sustainable Casual Shirt", price: "$16" },
  { id: 8, image: "././images/shirts/shirt8.jpeg", title: "The Roadster Lifestyle Co Women Blue & Off-White Regular Fit Checked Sustainable Casual Shirt", price: "$16" },
  { id: 9, image: "././images/shirts/shirt10.jpeg", title: "Roadster Women Pink & Off-White Smocked Checked Casual Sustainable Shirt", price: "$16" },
  { id: 10, image: "././images/shirts/shirt9.jpeg", title: "all about you Women Blue Slim Fit Solid Casual Shirt", price: "$13" },
  { id: 11, image: "././images/shirts/shirt11.jpeg", title: "ANI Women Black Standard Sheer Casual Shirt", price: "$17" },
];

const Shirt = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <section id="shirt" style={styles.section}>
      <div className="container mt-5">
        <button onClick={() => navigate(-1)}>Back</button>
        <h1 className="text-center font-weight-normal">Shirts</h1>
      </div>
      <div className="container mt-4 d-flex mb-5">
        <div className="row">
          {shirtItems.map(item => (
            <div className="col-md-4 mt-5" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top w-100" alt={item.title} />
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="d-flex justify-content-between">
                    <p>{item.price}</p>
                  </div>
                  <button className="btn btn-primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
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

export default Shirt;
