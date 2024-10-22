// src/components/InscripcionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InscripcionForm = () => {
  const [inscripcion, setInscripcion] = useState({
    estudianteId: '',
    cursoId: '',
  });

  const handleChange = (e) => {
    setInscripcion({ ...inscripcion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/inscripciones', inscripcion); // Endpoint para crear inscripción
      alert('Inscripción exitosa');
    } catch (error) {
      console.error("Error al inscribir:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID del Estudiante:
        <input type="text" name="estudianteId" value={inscripcion.estudianteId} onChange={handleChange} required />
      </label>
      <label>
        ID del Curso:
        <input type="text" name="cursoId" value={inscripcion.cursoId} onChange={handleChange} required />
      </label>
      <button type="submit">Inscribirse</button>
    </form>
  );
};

export default InscripcionForm;
