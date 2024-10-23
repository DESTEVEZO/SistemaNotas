// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CursoCrud from './components/cursos/CursoCrud'; // Asegúrate de que esta importación sea correcta
import InscripcionCrude from './components/inscripciones/InscripcionCrude'; // Corrige aquí el nombre del componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cursos" element={<CursoCrud />} />
        <Route path="/inscripciones" element={<InscripcionCrude />} /> {/* Asegúrate de que esta línea sea correcta */}
      </Routes>
    </Router>
  );
}

export default App;
