package com.sistema.educativo.controller;

import com.sistema.educativo.model.Curso;
import com.sistema.educativo.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cursos")
public class CursoController {
    
    @Autowired
    private CursoRepository cursoRepository;

    // Obtener todos los cursos
    @GetMapping
    public ResponseEntity<List<Curso>> getAllCursos() {
        List<Curso> cursos = cursoRepository.findAll();
        if (cursos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // Si no hay cursos, devolver 204 No Content
        }
        return new ResponseEntity<>(cursos, HttpStatus.OK);  // 200 OK si se encuentran cursos
    }

    // Crear un nuevo curso
    @PostMapping
    public ResponseEntity<Curso> createCurso(@RequestBody Curso curso) {
        try {
            Curso nuevoCurso = cursoRepository.save(curso);
            return new ResponseEntity<>(nuevoCurso, HttpStatus.CREATED);  // Devolver 201 Created
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);  // En caso de error, devolver 500
        }
    }

    // Obtener un curso por ID
    @GetMapping("/{id}")
    public ResponseEntity<Curso> getCursoById(@PathVariable("id") String id) {
        Optional<Curso> curso = cursoRepository.findById(id);
        return curso.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));  // Devolver 404 si no se encuentra el curso
    }
}
