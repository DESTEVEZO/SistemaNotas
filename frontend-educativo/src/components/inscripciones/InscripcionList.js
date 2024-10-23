// src/components/inscripciones/InscripcionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InscripcionList = () => {
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    const fetchInscripciones = async () => {
      try {
        const response = await axios.get('/inscripciones'); // Asegúrate de que el endpoint sea correcto
        setInscripciones(response.data);
      } catch (error) {
        console.error("Error fetching inscriptions:", error);
      }
    };
    fetchInscripciones();
  }, []);

  return (
    <div>
      <h1>Lista de Inscripciones</h1>
      <ul>
        {inscripciones.map(inscripcion => (
          <li key={inscripcion.id}>
            Estudiante: {inscripcion.estudiante} - Curso: {inscripcion.curso} - Estado: {inscripcion.estado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InscripcionList;
