import React from 'react';

const AddToCart = ({ cartItems }) => {
  return (
    <div className="container mt-4" style={styles.section}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '80px', height: '90px', objectFit: 'cover' }} // Adjust size here
                />
                <span>{item.title}</span>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const styles = {
    section: {
        // backgroundImage: `url("././images/bgimg.jpeg")`,
        backgroundColor: '#FFABAB',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 'bold',
    },
  };
  
  

export default AddToCart;

