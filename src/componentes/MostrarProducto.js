import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';
const MostrarProducto = () => {
    
    //Hook 
    //Este arreglo se inicializa con un array de productos
    const [productos, setProductos] = useState( [] );
    useEffect( () => {
        getProductos();
    }, []);

    const getProductos = async() => {
        const respuesta = await axios.get(`${endpoint}/productos`);
        setProductos(respuesta.data);
    }

    const borrarProducto = async(id) => {
        await axios.delete(`${endpoint}/producto/${id}`)
        getProductos();
    }

    return (
        <div>
            <div className='d-flex m-3'>
                <Link to='/crear' className='btn btn-success mt-3 mb-3'>Agregar Producto</Link>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr> 
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Tipo</th>
                        <th>Nro Parte</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { productos.map( (producto) => (
                        <tr key={ producto.id }>
                            <td> { producto.id}</td>
                            <td> { producto.descripcion }</td>
                            <td> { producto.tipo }</td>
                            <td> { producto.numero_parte }</td>
                            <td>
                                <Link to={`/editar/${producto.id}`} className="btn btn-warning m-2">Editar</Link>
                                <button onClick={ () => borrarProducto(producto.id) } className="btn btn-danger">Borrar</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default MostrarProducto;