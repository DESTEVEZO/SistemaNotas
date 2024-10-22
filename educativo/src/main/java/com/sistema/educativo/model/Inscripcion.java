package com.sistema.educativo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "inscripciones")
public class Inscripcion {
    @Id
    private String id;
    private String estudiante;         // ID del estudiante
    private String curso;              // ID del curso
    private Date fecha_inscripcion;    // Fecha de inscripción
    private String estado;             // Estado de la inscripción
    private Object notas;              // Notas o comentarios adicionales

    // Getters y Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(String estudiante) {
        this.estudiante = estudiante;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public Date getFecha_inscripcion() {
        return fecha_inscripcion;
    }

    public void setFecha_inscripcion(Date fecha_inscripcion) {
        this.fecha_inscripcion = fecha_inscripcion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Object getNotas() {
        return notas;
    }

    public void setNotas(Object notas) {
        this.notas = notas;
    }
}
