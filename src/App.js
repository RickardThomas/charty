import React, { useState } from 'react';
import './App.css';
import TradingViewWidget from 'react-tradingview-widget';

<<<<<<< HEAD
const links = [ {text: 'CoinFarm'    , name:"https://coinfarm.online/index.asp?tcs=1h"},
                {text: 'CMC'         , name:"https://coinmarketcap.com/" }, 
                {text: 'Bitfinex'    , name: "https://www.bitfinex.com/trading"}, 
                {text: 'Bids vs Sums', name:"http://data.bitcoinity.org/markets/bidask_sum/7d/USD/coinbase?bp=5&bu=c&t=m"}]

const indicator = { one: [ "MAVolumeWeighted@tv-basicstudies", "BollingerBandsR@tv-basicstudies"],
                    two: [ "RSI@tv-basicstudies",  "CMF@tv-basicstudies"]}
=======
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
>>>>>>> dad07cb5b1a49f0d54a724406c1597c24f7561d3

const sym = ["COINBASE:ETHEUR", "COINBASE:BTCEUR", "COINBASE:BCHEUR",  "COINBASE:LTCEUR" ]

const timeFrames =  { one: ['3', '15', '30',  '180'], two: ['1', '30', '60',  '180'], three: ['30','60', '120', 'D']}

<<<<<<< HEAD
function App() {

const [coin, setCoin] = useState(sym[1]);
const [timeFrame, setTimeFrame] = useState(timeFrames.one)
const [indicators, setIndicator] = useState(indicator.one);
=======
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
>>>>>>> dad07cb5b1a49f0d54a724406c1597c24f7561d3

const [mode, setMode] = useState(true);

const dark = mode  ? 'light' : 'dark';

const navButtons =  [

                     { text: mode ? 'Dark Mode' : 'Light Mode', mode: dark, funct: function(){setMode(mode ? false : true)} },

                     { text: 'ETH', symbol: sym[0], funct: function(){setCoin(this.symbol)} },
                     { text: 'BTC', symbol: sym[1], funct: function(){setCoin(this.symbol)} },
                     { text: 'BCH', symbol: sym[2], funct: function(){setCoin(this.symbol)} },
                     { text: 'LTC', symbol: sym[3], funct: function(){setCoin(this.symbol)} },

                    {text: '1 Indicators', indicators: indicator.one, funct: function(){setIndicator(this.indicators)}  },
                    {text: '2 Indicators', indicators: indicator.two, funct: function(){setIndicator(this.indicators)}  },
                    {text: 'Short-Term'  , timeFrame: timeFrames.two, funct: function(){setTimeFrame(this.timeFrame)}   },
                    {text: 'Medium-Term' , timeFrame: timeFrames.three, funct: function(){setTimeFrame(this.timeFrame)} },
                    ]
                    
const charts = [{ id:0, class:'chart-window', symbol:coin}, { id:1, class:'chart-window', symbol:coin}, 
                    { id:2, class:'chart-window', symbol:coin}, { id:3, class:'scalp-chart' , symbol:coin}]
   
 return (

<div className={"App " + dark}>
<nav className={"navbar " + dark}>

{navButtons.map( button => <span key={button.text} className={dark} onClick={() => button.funct()} > {button.text}</span> )}

{links.map(link => <a key={link.name} className={dark} target="_tab" href={link.name}> {link.text}</a> )}

</nav>

{charts.map( chart => 
    
<div key={chart.id} className={chart.class}>
<TradingViewWidget
symbol={chart.symbol}
theme= {mode ?  'Light': 'Dark' }
BarStyles='HEIKIN_ASHI'
locale="en"
Style='8'
interval={timeFrame[chart.id]}
studies={indicators}  
hide_side_toolbar={false}
autosize = {true}        
/>  
</div>
)}

</div>

);
}

export default App;
