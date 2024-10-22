package com.sistema.educativo.repository;

import com.sistema.educativo.model.Inscripcion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscripcionRepository extends MongoRepository<Inscripcion, String> {
    // Métodos personalizados si es necesario
}
