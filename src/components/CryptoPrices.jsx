import React, { useState, useEffect } from "react";

const CryptoPrices = () => {
  const [prices, setPrices] = useState(null);

  const fetchPrices = () => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,litecoin,cardano&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => setPrices(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchPrices();

    const intervalId = setInterval(() => {
      fetchPrices();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (!prices) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Crypto Market</h1>
      <p>Bitcoin (BTC): ${prices.bitcoin.usd}</p>
      <p>Ethereum (ETH): ${prices.ethereum.usd}</p>
      <p>Ripple (XRP): ${prices.ripple.usd}</p>
      <p>Litecoin (LTC): ${prices.litecoin.usd}</p>
      <p>Cardano (ADA): ${prices.cardano.usd}</p>
    </div>
  );
};

export default CryptoPrices;
