import React from 'react'
import './Scalp.css';
import TradingViewWidget from 'react-tradingview-widget';
import { useState } from 'react'

export default function ScalpEth() {

let width = TradingViewWidget.width = '980px'
let heighty = TradingViewWidget.height = '610px'
let themey = TradingViewWidget.theme = 'Dark' ;
let indicators =  TradingViewWidget.studies = [ "TripleEMA@tv-basicstudies",  "RSI@tv-basicstudies"]

const [input, setInput] = useState("ETH"); // '' is the initial state value

let coin = "COINBASE:" + input + "EUR"

return (

<div className="ScalpChart">

<TradingViewWidget
    symbol={coin}
    theme= {themey}
    BarStyles='HEIKIN_ASHI'
    locale="en"
    style='8'
    interval='1'
    studies={indicators}  
    hide_side_toolbar={false}
    width={1000}
    height={1000}        
  />

<TradingViewWidget
     symbol={coin}
    theme= {themey}
    BarStyles='HEIKIN_ASHI'
    locale="en"
    style='8'
    interval='3'
    studies={indicators}  
    hide_side_toolbar={false}
    width={1000}
    height={1000} 
         
  />

<p>

<i class="arrow">NEXT</i>
<input value={input} onInput={e => setInput(e.target.value)}/>

<ruby>
漢 <rt> ㄏㄢˋ </rt>
</ruby>
</p>

</div>
)
}





