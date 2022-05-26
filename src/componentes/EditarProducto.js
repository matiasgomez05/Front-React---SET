import axios from 'axios';
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/producto";
const EditarProducto = () => {

    const { id } = useParams();
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState([]);
    const [numero_parte, setNumeroParte] = useState('');
    const navegar = useNavigate();

    const tipos = ["Equipo", "Accesorio", "Servicio"];
    
    const actualizar = async(e) => {
        e.preventDefault()
        await axios.put(`${endpoint}/${id}`, {
            descripcion: descripcion,
            tipo: tipo,
            numero_parte: numero_parte
        })
        navegar("/");
    }

    useEffect( () => {
        getProductoPorId();
    }, []);

    const getProductoPorId = async() => {
        const respuesta = await axios.get(`${endpoint}/${id}`)
        setDescripcion(respuesta.data.descripcion);
        setTipo(respuesta.data.tipo);
        setNumeroParte(respuesta.data.numero_parte);
    }

    return (
        <div>
            <h3>Editar producto</h3>
            <form onSubmit={ actualizar }>
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

export default EditarProducto