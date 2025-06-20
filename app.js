import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    fetchBitcoinPrice();
  }, []);

  const fetchBitcoinPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
      );
      setBtcPrice(response.data.bitcoin.usd);
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bitcoin Price Tracker</h1>
      {btcPrice !== null ? (
        <h2>BTC/USD: ${btcPrice}</h2>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
