import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Section4CryptoPrices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': 't2JsejzHiFv1WvzJn5Ltl1aiGhRY7T9CXHa8IUzb7y8='
      }
    };

    fetch('https://openapiv1.coinstats.app/coins?limit=50', options)
      .then(res => res.json())
      .then(data => {
        setPrices(data.result);
      });
  }, []);

  return (
    <section className="section4-Prices">
      <h1 className="table-title">Today's Cryptocurrency Prices</h1>
      <div className="table-container">
        <table className="prices-table">
          <thead className="table-head">
            <tr>
              <th>NAME</th>
              <th style={{
                position: 'relative',
                left: '250px'
              }}>PRICE</th>
              <th style={{
                position: 'relative',
                left: '90px'
              }}>24H VOLUME</th>
              <th>MARKET CAP</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {prices.map((price, id) => (
              <tr key={id}>
                <td className="name">
                  <Link style={{
                    textDecoration: 'none',
                    color: 'black'
                  }} to={`/crypto-prices/${price.id}`}>{price.name}</Link>
                </td>
                <td className="price">
                  ${price.price.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </td>
                <td className={`change ${price.priceChange1d >= 0 ? 'up' : 'down'}`}>
                  {price.priceChange1d}%
                </td>
                <td className="market-cap">
                  ${price.marketCap.toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })} B
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}