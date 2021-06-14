import React, {useState} from 'react';
const Add = () => {
    const [wartosc, setWartosc] = useState(1)
    return (<div>wartosc wynosi = {wartosc} <button onClick={ () => setWartosc(wartosc +10)}>podnies wartosc o + 1</button></div>)
}

export default Add;