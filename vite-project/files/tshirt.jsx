import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';

// Sample data for T-shirts
const tshirtData = [
  {
    id: "t1",
    title: 'DILLINGER Women Black-Coloured Printed Cotton Oversized Pure Cotton T-shirt',
    price: '$10',
    image: '././images/tshirt/t1.jpeg',
  },
  {
    id: "t2",
    title: 'DILLINGER Women Blue-Coloured Printed Cotton Oversized Pure Cotton T-shirt',
    price: '$10',
    image: '././images/tshirt/t2.jpeg',
  },
  {
    id: "t3",
    title: 'DILLINGER Women Black-Coloured Printed Cotton Oversized Pure Cotton T-shirt',
    price: '$10',
    image: '././images/tshirt/t3.jpeg',
  },
  {
    id: "t4",
    title: 'DILLINGER Women Black-Coloured Printed Cotton Oversized Pure Cotton T-shirt',
    price: '$10',
    image: '././images/tshirt/t4.jpeg',
  },
  {
    id: "t5",
    title: 'DILLINGER Women Cream-Coloured Printed Cotton Oversized Pure Cotton T-shirt',
    price: '$10',
    image: '././images/tshirt/t5.jpeg',
  },
  {
    id: "t6",
    title: 'DILLINGER Women Navy Blue-Coloured Printed Cotton Oversized Pure Cotton T-shirt',
    price: '$10',
    image: '././images/tshirt/t6.jpeg',
  },
];

// Tshirt Component (Main)
const Tshirt = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <section id="tshirt" style={styles.section}>
      <div className="container mt-5">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
        <h1 className="text-center font-weight-normal">T-Shirts</h1>
      </div>
      <div className="container mt-4 d-flex mb-5">
        <div className="row">
          {tshirtData.map(item => (
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

// Styles
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
};

export default Tshirt;
