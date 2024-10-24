import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

// Sample data for sports items
const sportsItems = [
  { id: "sp1", image: '././images/sports/sp (1).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp2", image: '././images/sports/sp (2).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp3", image: '././images/sports/sp (3).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp4", image: '././images/sports/sp (4).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp5", image: '././images/sports/sp (5).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp6", image: '././images/sports/sp (6).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp7", image: '././images/sports/sp (7).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp8", image: '././images/sports/sp (8).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
  { id: "sp9", image: '././images/sports/sp (9).jpeg', title: 'Bannos Swagger Women Red & White Tropical Printed Sport Bra & Tights Set', price: '$50' },
];

// Sports Component (Main)
const Sports = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <section id="sports" style={styles.section}>
      <div className="container mt-5">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
        <h1 className="text-center font-weight-normal">Sports Wear</h1>
      </div>
      <div className="container mt-4 d-flex mb-5">
        <div className="row">
          {sportsItems.map(item => (
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

export default Sports;
