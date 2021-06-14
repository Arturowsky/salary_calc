import React, {useState} from 'react';

import Flaticons from "./assets/logos/Flaticons.png"
import Freepik from "./assets/logos/Freepik.png"
import FreeSVG from "./assets/logos/FreeSVG.png"
const Main = () => {
    const [data, setData] = useState(new Date().toString())

    const [currency, setCurrency] = useState(0)
    const Fecz = () => {
        fetch('http://api.nbp.pl/api/exchangerates/rates/a/nok/')
  .then(response => response.json())
  .then(data => setCurrency(data.rates[0].mid))
    }
    return (
            <div>
                <div className="main-container">
                    <div className="text-wrapper">
                        <h1 className="today">{data}<span> / nok: {Fecz()} {currency} pln</span></h1>
                    </div>
                    <div className="links-wrapper">
                        <img src={Flaticons} className="icons" />
                        <img src={Freepik} className="icons" />
                        <img src={FreeSVG} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        <img src={Flaticons} className="icons" />
                        
                    </div>
                </div>
            </div>
    )
}

export default Main;