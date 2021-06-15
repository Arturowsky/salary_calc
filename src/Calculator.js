import React, {useState} from 'react'

// LOGO
import logo from "./assets/logo.png"

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
    const [currencyEUR, setCurrencyEUR] = useState(0)
    const [currencyGBP, setCurrencyGBP] = useState(0)
    const [currencySEK, setCurrencySEK] = useState(0)
    const [chooseCurrency, setChooseCurrency] = useState(currency)
    const [checkDisabled, setCheckDisabled] = useState(false)
    const [housing, setHousing] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [workingDays, setWorkingDays] = useState(0)

    const textPLN = `1 PLN = NOK`

    const currencyXchange = [
        {
            currencyChange: "Currency",
            value: "",
            code: "PLN"
        },
        {
            currencyChange: textPLN,
            value: (1 / currency).toFixed(2),
            code: "PLN"
        },
        {
            currencyChange: "1 SEK = NOK",
            value: (currencySEK / currency).toFixed(2),
            code: "SEK"
        },
        {
            currencyChange: "1 GBP = NOK",
            value: (currencyGBP / currency).toFixed(2),
            code: "GBP"
        },
        {
            currencyChange: "1 EUR = NOK ",
            value: (currencyEUR / currency).toFixed(2),
            code: "EURO"
        }
    ]
  
    
    const Hours = e => {
        setNumberHours(e.target.value);
    }
    const HourlyWage = e => {
        setPerHour(e.target.value);
    }
    const Taxes = e => {
        setTax(e.target.value)
    }
    const Bonus = e => {
        setBonus(e.target.value)
    }
    const CheckboxFlag = () => {
        setCheckDisabled(!checkDisabled)
        if (checkDisabled === true) 
        setHousing(0)
        if (checkDisabled === false) 
        setHousing(2700)
    }
    const ChooseRoom = e => {
        setHousing(e.target.value)
    }
    const ChooseCurrency = e => {
        setChooseCurrency(e.target.value)
        
    }
    const WorkDays = e => {
        setWorkingDays(e.target.value)
    }
    
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/nok/')
    .then(response => response.json())
    .then(data => setCurrency(data.rates[0].mid));
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
    .then(response => response.json())
    .then(data => setCurrencyEUR(data[0].rates[7].mid));
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
    .then(response => response.json())
    .then(data => setCurrencyGBP(data[0].rates[10].mid));
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
    .then(response => response.json())
    .then(data => setCurrencySEK(data[0].rates[18].mid));
    // fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
    // .then(response => response.json())
    // .then(data => console.log(data));
    
    
    const money = (numberHours * perHour) 
    const minusTax = (tax / 100 ) * money
    const foodcost = workingDays * 55
    const extra = bonus * 1
    let netto =  money - minusTax - foodcost - housing + extra
    const pln = netto * currency

    return (<div className="app-container">
        <div className="app-container-upper">
        <div className="app-container-upper-grid">
            <h1>Salary  </h1>
            <div className="logo-header"><img src={logo} alt="" /><h1><span>Calculator</span></h1></div>
            <div className="app-form">
                <input type="number" placeholder="0" onChange={Hours}/>
                <h3>Number of working hours </h3>
            </div>
            <div className="app-form">
                <input type="number" placeholder="0" onChange={HourlyWage} />
                <h3>NOK per hour</h3>
            </div>
            <div className="app-form">
                <input type="number" placeholder="34" onChange={Taxes} />
                <h3>Tax (34% by default)</h3>
            </div>
            <div className="app-form">
                <input type="number" placeholder="0" onChange={Bonus} />
                <h3>Bonus to your salary</h3>
            </div>
            <div className="app-form">
                <input type="number" placeholder="0" onChange={WorkDays} />
                <h3>Working Days x 55 nok<br /></h3>
            </div>
            <p>Staff food cost is Your working days x 55 nok per day </p>
            
            <div className="app-form-check">
                <div className="-check"><input type="checkbox" onClick={CheckboxFlag} /></div>
                <h3>Accomodation<br /><span>Single room cost is equal to 2700 nok / Double room for 1700 nok</span></h3>
            </div>
            
            <div className="app-form-select" >
                <select disabled={checkDisabled === true ? false : true} value={housing} onChange={ChooseRoom}>{accomodate.map((option, index) => (
                      <option key={index} value={option.price}>
                      {option.roomtype}
                      </option>
                    ))}</select>
                <h3>Room type</h3>
            </div>
            
            <div className="app-form-select" >
                
                <select onChange={ChooseCurrency} value={chooseCurrency}>{currencyXchange.map((option, index) => (
                      <option key={index} value={option.value} id={option.code}>
                      {option.currencyChange} {option.value}
                      </option>
                      
                    ))}</select>
                <h3>Income exchange </h3>
            </div>
            <h2 className="red">{netto.toFixed(0)} nok netto</h2>
            <div><h2 className="blue">{netto === 0 ? netto : (netto / chooseCurrency).toFixed(2)} netto</h2></div>
            <p className="copyrights">Copyright <a href="https://github.com/Arturowsky">@arturowsky</a> 2021 🧐</p>
        </div>
        
        </div>
        
       
        </div>)

}

export default Calculator