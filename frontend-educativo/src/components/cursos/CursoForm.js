// src/components/cursos/CursoForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CursoForm = ({ curso, onFormSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    catedratico: '',
    jornada: '',
    salon: '',
    horario: '',
    fecha_inicio: '',
    fecha_fin: '',
  });

  useEffect(() => {
    if (curso) {
      setFormData(curso);
    }
  }, [curso]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (curso) {
        await axios.put(`http://localhost:8080/cursos/${curso.id}`, formData); // Endpoint para editar
      } else {
        await axios.post('http://localhost:8080/cursos', formData); // Endpoint para crear
      }
      onFormSubmit(); // Llamar a la función para refrescar la lista
    } catch (error) {
      console.error("Error al guardar el curso:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Código:
        <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} required />
      </label>
      <label>
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </label>
      <label>
        Descripción:
        <input type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />
      </label>
      {/* Agregar más campos según sea necesario */}
      <button type="submit">{curso ? 'Actualizar' : 'Crear'} Curso</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default CursoForm;
