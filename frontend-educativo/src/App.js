// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Curso from './components/Curso'; // Importa el componente Curso
import InscripcionForm from './components/InscripcionForm'; // Importa el componente InscripcionForm

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cursos" element={<Curso />} />
        <Route path="/inscripcion" element={<InscripcionForm />} />
        
      </Routes>
    </Router>
  );
}

export default App;
