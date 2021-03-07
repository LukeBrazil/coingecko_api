import React, { useState, useEffect } from "react";

import './styles.css'

export default function CoinTable({data}) {

    const [coinData, setCoinData] = useState([])

    // useEffect(() => {
    //     setCoinData(data)
    //     console.log("COIN DATA:", coinData)
    // })

    function formatTime(time) {
        let formattedTime = new Date(time).toLocaleDateString(
            'en-gb',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
        
        return formattedTime
    }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <abbr title="Rank">Rank</abbr>
          </th>
          <th>Coin</th>
          <th>Price</th>
          <th>
            <abbr title="24 Hour Change">24h</abbr>
          </th>
          <th>
            <abbr title="All Time High">ATH</abbr>
          </th>
          <th>
            <abbr title="All Time Low">ATL</abbr>
          </th>
          <th>
            <abbr title="24 Hour High">24HIGH</abbr>
          </th>
          
        </tr>
      </thead>
      
      <tbody>
        {data.map((item => {
            return (
                <tr>
          <th>{item.market_cap_rank}</th>
          <td>
              <img src={item.image} alt=""/>
              <p>{item.name}</p>
          </td>
          <td>${item.current_price}</td>
          <td>{item.market_cap_change_percentage_24h}%</td>
          <td>${item.ath}</td>
          <td>${item.atl}</td>
          <td>${item.high_24h}</td>
        </tr>
            )
            
        }))}
      </tbody>
    </table>
  );
}
