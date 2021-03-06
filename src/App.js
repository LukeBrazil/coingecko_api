import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
  
  const [btc, setBtc] = useState([])

  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => {
      setBtc(response.data[0])
    }) 
  }, [])
  
  function checkBtc() {
    console.log('STATE:', btc)
  }
  

  return (
    <>
    <h1>Hello</h1>
    <button onClick={checkBtc}>Click Me</button>
    </>
    
  );
  }

export default App;
