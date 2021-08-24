import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return(
    <Header name="LogoTipo" links = {["Sobre", "Contato", "Blog"]}></Header>
  );
}

export default App;
