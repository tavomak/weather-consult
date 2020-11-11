import React, { useState } from 'react'

const Formulario = ({search, saveSearch, setConsult}) => {

    const [error , setError] = useState(false)
    //Extraer ciudad y paos de search
    const {ciudad, pais } = search

    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()

        //Validar
        if( ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        //Enviar al componente principal
        setConsult(true)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            { error 
                ? <p className="alert alert-danger" role="alert">Todos los campos son obligatorios</p>
                : null 
            }
            <div className="form-group">
                <label htmlFor="ciudad"></label>
                <input 
                    className="form-control"
                    id="ciudad"
                    name="ciudad"
                    placeholder="Ciudad"
                    type="text"
                    value={ciudad}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="pais"></label>
                <select 
                    className="form-control"
                    id="pais" 
                    name="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">Seleccionar País</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <button 
                type="submit"
                className="btn btn-primary"
            >
                Buscar
            </button>
    </form>
     );
}
 
export default Formulario;