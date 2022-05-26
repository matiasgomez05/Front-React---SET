import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import MostrarProducto from './componentes/MostrarProducto';
import CrearProducto from './componentes/CrearProducto';
import EditarProducto from './componentes/EditarProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MostrarProducto /> } /> 
          <Route path="/crear" element={ <CrearProducto /> } />  
          <Route path="/editar/:id" element={ <EditarProducto /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
