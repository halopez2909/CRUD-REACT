import './App.css';
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  return (
    <div className="App">
      <div className="campos">
        <label>Nombre: 
          <input 
            onChange={(event) => { setNombre(event.target.value); }}
            type="text" 
            placeholder="Nombre" 
          />
        </label>
        
        <label>Descripción: 
          <input 
            onChange={(event) => { setDescripcion(event.target.value); }}
            type="text" 
            placeholder="Descripción" 
          />
        </label>
        
        <label>Precio: 
          <input 
            onChange={(event) => { setPrecio(parseFloat(event.target.value) || 0); }}
            type="number" 
            placeholder="Precio" 
          />
        </label>
        
        <label>Stock: 
          <input 
            onChange={(event) => { setStock(parseInt(event.target.value) || 0); }}
            type="number" 
            placeholder="Stock" 
          />
        </label>
        
        <button>Agregar</button>
      </div>
    </div>
  );
}

export default App; 