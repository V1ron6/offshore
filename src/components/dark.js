import React, { useState, useEffect } from 'react';
import './styles/dark.css';

const Mobile = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhones() {
      try {
        const response = await fetch('https://dummyjson.com/products/search?q=phone');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchPhones();
  }, []);

  if (loading) {
    return <p>Loading phone data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleBuyClick = (product) => {
    alert(`Added "${product.title}" to your cart! (Price: $${product.price})`);
    console.log('Buy button clicked for:', product);
    // In a real application, you would implement actual cart logic here
  };

  return (
    <>
      <p id="lie">our <span>popular</span> products</p>
      <p id="lie2">experience a top-notch quality and satisfaction with our sought after selections.
        discover a world of comfort and value</p>
      <p id='lie'>mobile devices</p>
      <div className="child">
        {products.map((product) => (
          <div className='phones' key={product.id}>
            <center>
              <img src={product.thumbnail} id="phone" alt={product.title} />
            </center>
            <p id="star-rating">
              <span id="gt">&#9733; </span>
              <span id="gt1">{product.rating}</span>
            </p>
            <p id="lo">{product.title} <span id="price">${product.price}.00</span> </p>
            <button className="buy-button" onClick={() => handleBuyClick(product)}>Buy Now</button>
          </div>
        ))}
        <div className='phones'>
          <center>
            <p id="str">
              <a href="#">more</a>
            </p>
          </center>
        </div>
      </div>
    </>
  );
}

export default Mobile;