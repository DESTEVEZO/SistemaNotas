package com.sistema.educativo.controller;

import com.sistema.educativo.model.Inscripcion;
import com.sistema.educativo.repository.InscripcionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/inscripciones")
public class InscripcionController {
    
    @Autowired
    private InscripcionRepository inscripcionRepository;

    // Obtener todas las inscripciones
    @GetMapping
    public ResponseEntity<List<Inscripcion>> getAllInscripciones() {
        List<Inscripcion> inscripciones = inscripcionRepository.findAll();
        if (inscripciones.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // Devolver 204 No Content si no hay inscripciones
        }
        return new ResponseEntity<>(inscripciones, HttpStatus.OK);  // 200 OK si se encuentran inscripciones
    }

    // Crear una nueva inscripción
    @PostMapping
    public ResponseEntity<Inscripcion> createInscripcion(@RequestBody Inscripcion inscripcion) {
        try {
            Inscripcion nuevaInscripcion = inscripcionRepository.save(inscripcion);
            return new ResponseEntity<>(nuevaInscripcion, HttpStatus.CREATED);  // Devolver 201 Created
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);  // Manejar errores con 500 Internal Server Error
        }
    }

    // Obtener una inscripción por ID
    @GetMapping("/{id}")
    public ResponseEntity<Inscripcion> getInscripcionById(@PathVariable("id") String id) {
        Optional<Inscripcion> inscripcion = inscripcionRepository.findById(id);
        return inscripcion.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));  // Devolver 404 si no se encuentra
    }
}
