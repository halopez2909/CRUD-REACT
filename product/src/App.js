import './App.css';

function App() {
  return (
    <div className="App">
      <div className="campos">
        <label>Nombre:<input type="text" placeholder="Nombre" /></label>
        <label>Descripción:<input type="text" placeholder="Descripción" /></label>
        <label>Precio:<input type="text" placeholder="Precio" /></label>
        <label>Stock:<input type="text" placeholder="Stock" /></label>
        <button>Agregar</button>
      </div>
    </div>
  );
}

export default App;