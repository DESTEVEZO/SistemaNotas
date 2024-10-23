// src/components/inscripcion/InscripcionCrude.js
import React from 'react';
import InscripcionForm from './InscripcionForm'; // Importa correctamente
import InscripcionList from './InscripcionList'; // Importa correctamente

const InscripcionCrude = () => {
  return (
    <div>
      <h1>Inscripcion</h1>
      <InscripcionForm />
      <InscripcionList />
    </div>
  );
};

export default InscripcionCrude;
