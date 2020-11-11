import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {
  const [search, saveSearch] = useState({
    ciudad : '',
    pais : ''
  }),
  [consult, setConsult] = useState(false),
  [result, setResult] =useState({}),
  [error, setError] = useState(false)

  //Extraer ciudad y paos de search
  const {ciudad, pais } = search

  useEffect(() => {
    const consultarApi = async () => {
      
      if(consult){
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY,
        API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}`

        const fetchApi = await fetch(API_URL),
        res = await fetchApi.json()
  
        setResult(res)
        setConsult(false)
        
        if(result.cod === "404"){
          setError(true)
        } else {
          setError(false)
        }

      }
      
    }
    consultarApi();
  }, [consult,ciudad,pais, result.cod])

  let component

  if (error) {
    component = <Error mensaje="No existen resultados" />
  } else {
    component = <Clima  result={result} />
  }
  

  return (
    <>
      <Header
        titulo="Latam Weather Consulting"
      />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-4">
            <Formulario
              search={search}
              saveSearch={saveSearch}
              setConsult={setConsult}
            />
          </div>
          <div className="col-md-6 py-4">
            {component}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
