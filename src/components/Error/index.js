import React from 'react'

const Error = ({mensaje}) => {
    return ( 
    <p className="alert alert-warning" role="alert">{mensaje}</p>
     )
}
 
export default Error;