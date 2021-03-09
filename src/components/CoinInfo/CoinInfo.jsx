import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './styles.css'

export default function CoinInfo({ match }) {
    const id = match.params.id

    const [coin, setCoin] = useState({})

    useEffect(() => {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${id}`
          )
          .then((response) => {
            setCoin(response.data)
          });
      }, []);

    return (
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
            <div className="tile">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child box">
                        {coin.name} ({coin.symbol})
                    </article>
                    <article className="tile is-child box">
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        
                    </article>
                </div>
                </div>
                <div className="tile is-parent">
                <article className="tile is-child box">
                
                </article>
            </div>
        </div>
        <div className="tile is-parent">
            <article className="tile is-child box">
            </article>
        </div>
    </div>
    )
}
