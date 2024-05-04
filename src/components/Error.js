import { useRouteError } from 'react-router-dom'
import React from 'react'

const Error = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h2>Oops 😯 Something is wrong !!!</h2>
        <h3>{error.status} : {error.statusText} 🤔</h3> 
    </div>
  )
}

export default Error;