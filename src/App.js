import axios from 'axios'
import React, { useState, useEffect } from 'react'
import InfoCard from './components/InfoCard/InfoCard'
import CoinTable from './components/CoinTable/CoinTable'

function App() {
  
  const [top100Data, setTop100Data] = useState([])

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C%207d%2C%2030d')
    .then((response) => {
      setTop100Data(response.data)
    }) 
  }, [])
  
  

  return (
    <>
      <CoinTable data={top100Data}/>
    
    </>
    
  );
  }

export default App; 
