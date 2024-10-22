package com.sistema.educativo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "cursos")
public class Curso {
    @Id
    private String id;
    private String codigo;         // Código del curso
    private String nombre;         // Nombre del curso
    private String descripcion;    // Descripción del curso
    private String catedratico;    // ID del catedrático
    private String jornada;        // Jornada (matutina, vespertina, etc.)
    private String salon;          // Salón asignado
    private Object horario;        // Horario del curso (puedes definir esto como necesites)
    private List<String> inscritos; // Lista de IDs de estudiantes inscritos
    private Date fecha_inicio;     // Fecha de inicio del curso
    private Date fecha_fin;        // Fecha de fin del curso

    // Getters y Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCatedratico() {
        return catedratico;
    }

    public void setCatedratico(String catedratico) {
        this.catedratico = catedratico;
    }

    public String getJornada() {
        return jornada;
    }

    public void setJornada(String jornada) {
        this.jornada = jornada;
    }

    public String getSalon() {
        return salon;
    }

    public void setSalon(String salon) {
        this.salon = salon;
    }

    public Object getHorario() {
        return horario;
    }

    public void setHorario(Object horario) {
        this.horario = horario;
    }

    public List<String> getInscritos() {
        return inscritos;
    }

    public void setInscritos(List<String> inscritos) {
        this.inscritos = inscritos;
    }

    public Date getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(Date fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public Date getFecha_fin() {
        return fecha_fin;
    }

    public void setFecha_fin(Date fecha_fin) {
        this.fecha_fin = fecha_fin;
    }
}
