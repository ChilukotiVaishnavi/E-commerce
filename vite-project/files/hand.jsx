import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';

const handbagItems = [
  { id: 'h1', image: '././images/handbags/hand (1).jpeg', title: 'STYBUZZ Peach-Coloured Floral Textured Oversized Shopper Tote Bag', price: '$30' },
  { id: 'h2', image: '././images/handbags/hand (2).jpeg', title: 'PR Lavie Bottega Betty Women Olive Green Tote bag', price: '$30' },
  { id: 'h3', image: '././images/handbags/hand (3).jpeg', title: 'H&M Women Beige Handbag', price: '$34' },
  { id: 'h4', image: '././images/handbags/hand (4).jpeg', title: 'H&M Women Orange Handbag', price: '$35' },
  { id: 'h5', image: '././images/handbags/hand (5).jpeg', title: 'H&M Women Beige Handbag', price: '$35' },
  { id: 'h6', image: '././images/handbags/hand (6).jpeg', title: 'H&M Women Pink Handbag', price: '$35' },
  { id: 'h7', image: '././images/handbags/hand (7).jpeg', title: 'H&M Women Black Pink Handbag', price: '$40' },
  { id: 'h8', image: '././images/handbags/hand (8).jpeg', title: 'H&M Women Floral Handbag', price: '$35' },
];

const Handbag = ({ addToCart }) => {
  const navigate = useNavigate();


  return (
    <section id="handbag" style={styles.section}>
      <div className="container mt-5">
        <button onClick={() => navigate(-1)}>Back</button>
        <h1 className="text-center font-weight-normal">Hand Bags</h1>
      </div>
      <div className="container mt-4 d-flex mb-5">
        <div className="row">
          {handbagItems.map(item => (
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

export default Handbag;
