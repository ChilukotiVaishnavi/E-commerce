import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const skirtItems = [
  { id: "sk1", image: "././images/skirts/sk (1).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$25" },
  { id: "sk2", image: "././images/skirts/sk (2).jpeg", title: "Taavi Black & Maroon Kalamkari Hand Block Print Ethnic Sustainable Maxi Pure Cotton Skirt", price: "$20" },
  { id: "sk3", image: "././images/skirts/sk (3).jpeg", title: "Taavi Black & Maroon Kalamkari Hand Block Print Ethnic Sustainable Maxi Pure Cotton Skirt with Gathers", price: "$20" },
  { id: "sk4", image: "././images/skirts/sk (4).jpeg", title: "Mast & Harbour Black & White Printed A-Line Skirt", price: "$25" },
  { id: "sk5", image: "././images/skirts/sk (5).jpeg", title: "N-Gal Black Flared Mini Skirt", price: "$30" },
  { id: "sk6", image: "././images/skirts/sk (6).jpeg", title: "Roadster Brown Mini A-Line Sustainable Skirt", price: "$32" },
  { id: "sk7", image: "././images/skirts/sk (7).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$25" },
  { id: "sk8", image: "././images/skirts/sk (8).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$28" },
  { id: "sk9", image: "././images/skirts/sk (9).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$25" },
  { id: "sk10", image: "././images/skirts/sk (10).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$28" },
  { id: "sk11", image: "././images/skirts/sk (11).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$25" },
  { id: "sk12", image: "././images/skirts/sk (12).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$31" },
  { id: "sk13", image: "././images/skirts/sk (13).jpeg", title: "Tokyo Talkies Women Black Solid Casual-Fit A-Line Skirt", price: "$25" },
  { id: "sk14", image: "././images/skirts/sk (14).jpeg", title: "FableStreet White Accordion Pleated A-Line Midi Skirt", price: "$26" },
];

const Skirt = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <section id="skirt" style={styles.section}>
      <div className="container mt-5">
        <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
        <h1 className="text-center font-weight-normal">Skirts</h1>
      </div>
      <div className="container mt-4 d-flex mb-5">
        <div className="row">
          {skirtItems.map(item => (
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
};

export default Skirt;
