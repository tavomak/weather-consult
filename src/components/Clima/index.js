import React from 'react'

const Clima = ({result}) => {
    // extraer valores
    const {name, main} = result
    if(!name) return null

    const kelvin = 273.15
    return ( 
        <div className="card">
            <h3>El clima de {name}</h3>
            <p>{parseFloat(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span></p>
        </div>
     );
}
 
export default Clima;