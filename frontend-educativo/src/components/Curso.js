// src/components/Curso.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Curso = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get('/cursos'); // Asegúrate de que el endpoint sea correcto
        setCursos(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCursos();
  }, []);

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            {curso.nombre} - {curso.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Curso;
