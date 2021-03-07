import React from "react";

import './styles.css'

export default function InfoCard({ data }) {

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
    <div className="card">
      <div className="card-content">
        <div className="content">
            <img src={data.image} alt=""/>
          <p>{data.name}</p>
          <p>Current Price: ${data.current_price}</p>
          <p>Symbol: {data.symbol}</p>
          <p>All Time High: ${data.ath}</p>
          <p>All Time Low: ${data.atl}</p>
          <p>Last Checked: {formatTime(data.last_updated)}</p>
        
        </div>
      </div>
    </div>
  );
}
