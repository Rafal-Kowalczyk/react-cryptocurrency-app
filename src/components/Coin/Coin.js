import React from 'react';

import './Coin.scss';

const Coin = ({
  image,
  name,
  symbol,
  updated,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  let jsonData = `${updated}`;
  const stringData = new Date(jsonData).toLocaleString();

  return (
    <div className='coin-container'>
      <div className='wrapper'>
        <div className='coin'>
          <img src={image} alt='crypto' className='coin__img' />
          <div className='coin-sign'>
            <h1>{name}</h1>
            <p className='coin-sign__symbol'>{symbol}</p>
          </div>
        </div>
        <div className='coin-data'>
          <p className='coin-data__price'>Cena: $ {price}</p>
          <p className='coin-data__volume'>
            Volumen: $ {volume.toLocaleString()}
          </p>
          <span className='coin-data__exchange'>
            <p>Kurs: </p>
            {priceChange < 0 ? (
              <p className='coin-data__percent red'>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className='coin-data__percent green'>
                {priceChange.toFixed(2)}%
              </p>
            )}
          </span>
          <p className='coin-data__marketcap'>
            Market Cap: $ {marketcap.toLocaleString()}
          </p>
          <p className='coin-data__updated'>
            Ostatnia aktualizacja: {stringData}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
