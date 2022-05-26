import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const endpoint = "http://localhost:8000/api/producto";
const CrearProducto = () => {

    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState([]);
    const [numero_parte, setNumeroParte] = useState('');
    const navegar = useNavigate();

    const tipos = ["Equipo", "Accesorio", "Servicio"];

    const guardar = async(e) => {
        e.preventDefault();
        await axios.post(endpoint, {
            descripcion: descripcion,
            tipo: tipo,
            numero_parte: numero_parte 
        });
        navegar('/');
    }

  return (
    <div>
        <h3>Crear producto</h3>
        <form onSubmit={ guardar }>
            <div className='mb-3'>
                <label htmlFor="descripcion" className='form-label'>Descripcion: </label>
                <input type="text" value={ descripcion } className="form-control" onChange={ (e) => setDescripcion(e.target.value) }/>    
            </div>
            <div className='mb-3'>
                <label htmlFor="tipo" className='form-label'>Tipo: </label>
                <select htmlFor="tipo" className="form-select" onChange={ (e) => setTipo(e.target.value) }>
                    <option value=""> </option>
                    { tipos.map( tipo => (
                        <option key={tipo} value={tipo}> {tipo} </option>
                    ))}
                </select>
            </div>        
            <div className='mb-3'>
                <label htmlFor="numero_parte" className='form-label'>Numero de Parte: </label>
                <input type="text" value={ numero_parte } className="form-control" onChange={ (e) => setNumeroParte(e.target.value) }/>    
            </div>   
            <button type="submit" className='btn btn-success'>Crear</button>                 
        </form>
    </div>
  )
}

export default CrearProducto