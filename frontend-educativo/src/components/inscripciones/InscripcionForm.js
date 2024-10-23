// src/components/inscripciones/InscripcionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InscripcionForm = ({ onInscripcionCreada }) => {
  const [inscripcion, setInscripcion] = useState({
    estudiante: '',
    curso: '',
  });

  const handleChange = (e) => {
    setInscripcion({ ...inscripcion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/inscripciones', inscripcion);
      onInscripcionCreada(response.data); // Notificar al componente padre
      alert('Inscripción exitosa');
    } catch (error) {
      console.error("Error al inscribir:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID del Estudiante:
        <input type="text" name="estudiante" value={inscripcion.estudiante} onChange={handleChange} required />
      </label>
      <label>
        ID del Curso:
        <input type="text" name="curso" value={inscripcion.curso} onChange={handleChange} required />
      </label>
      <button type="submit">Inscribirse</button>
    </form>
  );
};

export default InscripcionForm;
