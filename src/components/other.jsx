import React, { useState, useEffect } from 'react';
import './styles/dark.css';

const All= () => {
  const [allItems, setAllItems] = useState([]);
  const [nonLaptops, setNonLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0&skip=0');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllItems(data.products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (allItems.length > 0) {
      const filteredNonLaptops = allItems.filter(item => item.category !== 'laptops');
      setNonLaptops(filteredNonLaptops);
    }
  }, [allItems]);

  if (loading) {
    return <p>Loading product data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleBuyClick = (item) => {
    alert(`Added "${item.title}" to your cart! (Price: $${item.price})`);
    console.log('Buy button clicked for:', item);
  };

  return (
    <>
      <p id='lie'>Other Items</p>
      <div className="child">
        {nonLaptops.map((item) => (
          <div className='laptop-item' key={item.id}>
            <center>
              <img src={item.thumbnail} alt={item.title} className="laptop-image" />
            </center>
            <div className="laptop-details">
              <p className="star-rating">
                <span className="gt">&#9733; </span>
                <span className="gt1">{item.rating}</span>
              </p>
              <p className="laptop-title">{item.title}</p>
              <p className="laptop-price">Price: ${item.price}.00</p>
              <p className="laptop-brand">Brand: {item.brand}</p>
              <p className="laptop-category">Category: {item.category}</p>
              <button className="buy-button" onClick={() => handleBuyClick(item)}>Buy Now</button>
            </div>
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

export default All;