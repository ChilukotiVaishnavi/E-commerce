import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const sareeItems = [
  { id: "s1", image: "././images/saree/saree (1).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$60" },
  { id: "s2", image: "././images/saree/saree (2).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$61" },
  { id: "s3", image: "././images/saree/saree (3).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$62" },
  { id: "s4", image: "././images/saree/saree (4).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$62" },
  { id: "s5", image: "././images/saree/saree (5).jpeg", title: "Anouk Ethnic Motifs Silk Blend Saree", price: "$64" },
  { id: "s6", image: "././images/saree/saree (6).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$60" },
  { id: "s7", image: "././images/saree/saree (7).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$60" },
  { id: "s8", image: "././images/saree/saree (8).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$68" },
  { id: "s9", image: "././images/saree/saree (9).jpeg", title: "PMD Fashion Leheriya Printed Gotta Patti Embellished Ruffles Border Saree", price: "$64" },
  { id: "s10", image: "././images/saree/saree (10).jpeg", title: "Tikhi Imli Gunmetal-Toned Striped Saree", price: "$69" },
  { id: "s11", image: "././images/saree/saree (11).jpeg", title: "Sangria Blue & Pink Georgette Striped Zari Work Saree", price: "$64" },
  { id: "s12", image: "././images/saree/saree (12).jpeg", title: "Sangria Pink Solid Net Ruffled Saree", price: "$67" },
];

const Saree = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <section id="saree" style={styles.section}>
      <div className="container mt-5">
        <button onClick={() => navigate(-1)}>Back</button>
        <h1 className="text-center font-weight-normal">Sarees</h1>
      </div>
      <div className="container mt-4 d-flex mb-5">
        <div className="row">
          {sareeItems.map(item => (
            <div className="col-md-4 mt-5" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top w-100" alt={item.title} />
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="d-flex justify-content-between">
                    <p>{item.price}</p>
                  </div>
                  {/* <button
                    type="button"
                    className="btn btn-default btn-sm"
                    onClick={() => alert(`${item.title} added to cart!`)}
                  >
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    Add to Cart
                  </button> */}
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

export default Saree;
