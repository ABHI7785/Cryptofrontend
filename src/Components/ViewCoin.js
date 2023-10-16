

import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom';
import'./Style/View.css'
const ViewCoin = () => {
  const location = useLocation();
  const coinData = location.state.coinData;
 

const navigate=useNavigate();

  return (
    <div className='buymain'>

<div className='viewcoin'>
      <h3>COIN DETAILS</h3>
    <div  style={{ margin: '10px' }}>
              <Card  className="view">
                <Card.Img className='viewimage' variant="top" src={coinData.image} />
                <Card.Body>
                  <div className='card-content'>

                  <Card.Title><h2 className='namme'>{coinData.name}</h2></Card.Title>
                  <Card.Title><p className='symb'>{coinData.symbol}</p></Card.Title>
                  <Card.Title><p className='same'>Current Price: {coinData.current_price}</p></Card.Title>
                  <Card.Title><p className='same'>Market Capital: {coinData.market_cap}</p></Card.Title>
                  <Card.Title><p className='same'>Market Capital Rank: {coinData.market_cap_rank}</p></Card.Title>
                  <Card.Title><p className='same'>Price Change 24H: {coinData.price_change_24h}</p></Card.Title>
                  <Card.Title><p className='same'>Total Supply: {coinData.total_supply}</p></Card.Title>
                  <Card.Title><p className='same1'>Total Volume: {coinData.total_volume}</p></Card.Title>

                
                  

          </div>
                  
                </Card.Body>
              
              </Card>
            </div>
            

    </div>
    <div className='butbutt' style={{display:'flex'}}>
    <button onClick={()=>{navigate("/login")}} className='ctabuy'>Login to continue</button>
    <button  onClick={()=>{navigate("/purchaseconfirm")}} className='ctabuyy'>Already Login Click here</button>
    </div>
   


    </div>
   
    

   
  );
};

export default ViewCoin;
