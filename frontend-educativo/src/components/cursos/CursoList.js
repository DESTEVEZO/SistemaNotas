// src/components/cursos/CursoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CursoList = ({ onEdit }) => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cursos');
        setCursos(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCursos();
  }, []);

  const handleEdit = (curso) => {
    onEdit(curso);
  };

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            {curso.nombre} - {curso.descripcion}
            <button onClick={() => handleEdit(curso)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoList;
