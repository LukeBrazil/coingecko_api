import React, { useState, useEffect } from "react";
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import CoinInfo from "../CoinInfo/CoinInfo";

import './styles.css'

export default function CoinTable() {

  const [top100Data, setTop100Data] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C%207d%2C%2030d"
      )
      .then((response) => {
        setTop100Data(response.data);
      });
  }, []);

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
        {top100Data.map((item => {
            return (
                <tr key={item.id}>
          <th className='rank-row'>{item.market_cap_rank}</th>
          <td className='name-row'>
              <img src={item.image} alt=""/>
              <Link to={`/coin/${item.id}`}>{item.name}</Link>
          </td>
          <td>${parseFloat(item.current_price)}</td>
          <td >{item.market_cap_change_percentage_24h}%</td>
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
