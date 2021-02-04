import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Coin from './components/Coin/Coin';
import './App.scss';

function App() {
  const API_URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <div className='wrap'>
    <div className='coin-app'>
      <div className='coin-app__search'>
        <h1 className='coin-app__text'>Wyszukaj kryptowalutę</h1>
        <form className='coin-form'>
          <input
            type='text'
            placeholder='Szukaj'
            className='coin-input'
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            updated={coin.last_updated}
            price={coin.current_price}
            volume={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.total_volume}
          />
        );
      })}
    </div>
    // </div>
  );
}

export default App;
