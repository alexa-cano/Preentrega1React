import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemCount from './components/ItemCount/itemCount';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Descubre lo mejor!" />
      <ItemCount initial={1} stock ={10} onAdd ={(quantity) => console.log ("Cantidad agregada",quantity)}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;

