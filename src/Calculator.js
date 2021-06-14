import React, {useState} from 'react'


const accomodate = [
    {
        roomtype: "Single",
        price: 2700
    },
    {
        roomtype: "Double",
        price: 1700
    }
]

const Calculator = () => {
    const [numberHours, setNumberHours] = useState(0);
    const [perHour, setPerHour] = useState(0);
    const [tax, setTax] = useState(34);
    const [currency, setCurrency] = useState(0)
    const [checkDisabled, setCheckDisabled] = useState(true)
    const [housing, setHousing] = useState(0)

    const Hours = e => {
        setNumberHours(e.target.value);
    }
    const HourlyWage = e => {
        setPerHour(e.target.value);
    }
    const Taxes = e => {
        setTax(e.target.value)
    }
    const CheckboxFlag = () => {
        setCheckDisabled(!checkDisabled)
        if (checkDisabled === false) 
        setHousing(0)
        if (checkDisabled === true) 
        setHousing(2700)
    }
    const ChooseRoom = e => {
        setHousing(e.target.value)
        console.log(housing)
    }
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/nok/')
    .then(response => response.json())
    .then(data => setCurrency(data.rates[0].mid));
    const money = (numberHours * perHour) 
    const minusTax = (tax / 100 ) * money
    const foodcost = 20 * 55
    const netto = money - minusTax - foodcost - housing
    const pln = netto * currency
    return (<div className="app-container">
        <div className="app-container-upper">
        <div className="app-container-upper-grid"><h1>Salary  <span>Calculator</span></h1>

            <div className="app-form">
                <input type="number" placeholder="156" onChange={Hours}/>
                <h3>Number of working hours</h3>
            </div>
            <div className="app-form">
                <input type="number" placeholder="256" onChange={HourlyWage} />
                <h3>NOK per hour</h3>
            </div>
            <div className="app-form">
                <input type="number" placeholder="34" onChange={Taxes} />
                <h3>Tax (34% by default)</h3>
            </div>
            <div className="app-form-check">
                <div className="-check"><input type="checkbox" onClick={CheckboxFlag} /></div>
                <h3>Accomodation</h3>
            </div>
            <div className="app-form-select" >
                <select disabled={checkDisabled} value={housing} onChange={ChooseRoom}>{accomodate.map((option, index) => (
                      <option key={index} value={option.price}>
                      {option.roomtype}
                      </option>
                    ))}</select>
                <h3>Room type</h3>
            </div>
            <h2 className="red">{netto.toFixed(0)} nok netto</h2>
        </div>
        
        </div>
        <div className="app-container-lower"><div><p>exchange for {currency}</p><h2 className="blue">{pln.toFixed(2)} pln netto</h2></div></div>
        <footer><p>Food cost is automaticaly counted by multiplay 55 nok per day for average  20 working days</p></footer>
        </div>)

}

export default Calculator