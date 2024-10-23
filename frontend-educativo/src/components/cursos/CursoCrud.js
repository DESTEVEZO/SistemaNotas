// src/components/cursos/CursoCrud.js
import React, { useState } from 'react';
import CursoList from './CursoList';
import CursoForm from './CursoForm';

const CursoCrud = () => {
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (curso) => {
    setSelectedCurso(curso);
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    setSelectedCurso(null);
    setShowForm(false);
    // Aquí podrías agregar lógica para recargar la lista de cursos si es necesario
  };

  return (
    <div>
      <h1>Gestión de Cursos</h1>
      {showForm ? (
        <CursoForm curso={selectedCurso} onFormSubmit={handleFormSubmit} onCancel={() => setShowForm(false)} />
      ) : (
        <>
          <CursoList onEdit={handleEdit} />
          <button onClick={() => { setShowForm(true); setSelectedCurso(null); }}>Agregar Curso</button>
        </>
      )}
    </div>
  );
};

export default CursoCrud;
