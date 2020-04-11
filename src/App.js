import React from 'react';
import './App.css';
import { useState } from 'react'
import TradingViewWidget from 'react-tradingview-widget';

function App() {

const [coiny, setCoiny] = useState("COINBASE:BTCEUR");
const [timeFrame, setTimeFrame] = useState(['30', '60', '180' , 'D'])
const [indicators, setIndicator] = useState(["BollingerBandsR@tv-basicstudies"]);

const [mode, setMode] = useState(true);

const makeDark = () => {
  setMode( mode  ? false : true);
}

console.log(Object.getOwnPropertyNames(TradingViewWidget))

return (

<div className="app">

<div className="navbar">

<button onClick={() => setCoiny("COINBASE:BTCEUR")}>BTC</button>
<button onClick={() => setCoiny("COINBASE:ETHEUR")}>ETH</button>
<button onClick={() => setCoiny("COINBASE:BCHEUR")}>BCH</button>
<button onClick={() => setCoiny("COINBASE:LTCEUR")}>LTC</button>

<button onClick={() => setTimeFrame( [ '3', '15', '45' , '180'])}> Scalping</button>
<button onClick={() => setTimeFrame([ '45', '60', '180' , 'D'])}> Trading</button>

<button onClick={() => setIndicator([ "MAVolumeWeighted@tv-basicstudies", "RSI@tv-basicstudies", "CMF@tv-basicstudies"])}>CMF /  RSI / VWMA Indicators</button>
<button onClick={() => setIndicator([ "MACD@tv-basicstudies", "BollingerBandsR@tv-basicstudies"])}>MACD </button>

<button onClick={makeDark}>{ mode ? 'Dark' : 'Light' }</button>

{/* add links */}
<button><a target="_tab"  href="https://coinfarm.online/index.asp?tcs=1h">CoinFarm</a></button>
<button><a target="_tab" href="https://coinmarketcap.com/">CMC</a></button>
<button><a target="_tab" href="https://www.bitfinex.com/trading">Bitfinex</a></button>
<button><a target="_tab" href="http://data.bitcoinity.org/markets/bidask_sum/7d/USD/coinbase?bp=5&bu=c&t=m"> Bids vs Sums</a></button>

</div >

<div className="chart-window">

    <TradingViewWidget
    symbol={coiny}
    theme= {mode ?  'Light': 'Dark' }
    BarStyles='HEIKIN_ASHI'
    locale="en"
    Style='8'
    interval={timeFrame[0]}
    studies={indicators}  
    hide_side_toolbar={false}
    autosize      
    /> 

</div>

<div className="chart-window">

    <TradingViewWidget
    symbol={coiny}
    theme= {mode ?  'Light': 'Dark' }
    BarStyles='HEIKIN_ASHI'
    locale="en"
    Style='8'
    interval={timeFrame[1]}
    studies={indicators}  
    hide_side_toolbar={false}
    autosize      
    /> 

</div>

<div className="chart-window">

    <TradingViewWidget
    symbol={coiny}
    theme= {mode ?  'Light': 'Dark' }
    BarStyles='HEIKIN_ASHI'
    locale="en"
    Style='8'
    interval={timeFrame[2]}
    studies={indicators}  
    hide_side_toolbar={false}
    autosize      
    /> 
  
 </div>

<div className="scalp-chart">

    <TradingViewWidget
    symbol={coiny}
    theme= {mode ?  'Light': 'Dark' }
    BarStyles='HEIKIN_ASHI'
    locale="en"
    Style='8'
    interval={timeFrame[3]}
    studies={indicators}  
    hide_side_toolbar={false}
    autosize      
    /> 

</div>

</div>

);
}

export default App;
