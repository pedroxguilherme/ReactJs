import './App.css';
import { useState } from 'react';

//import List from './components/List'
//import Pessoa from './components/Pessoa';

import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import OutraLista from './components/OutraLista';

function App() {
  const [nome, setNome] = useState();

  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>
   
  )
}

export default App;
