package com.zonarefri.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor 
@AllArgsConstructor
@Builder
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // <--- Cambiado de Integer a Long

    @Column(nullable = false, length = 150)
    private String nombre;

    @Column(columnDefinition = "TEXT")
    private String descripcion;
    
    @Column(precision = 38, scale = 2, nullable = false)
    private BigDecimal precio;

    @Column(nullable = false)
    private Integer stock; // El stock puede seguir siendo Integer (es una cantidad)
    
    @Column(name = "imagen_url", length = 500) 
    private String imagenUrl;
    
    @Column(name = "especificaciones_tecnicas", columnDefinition = "TEXT")
    private String especificacionesTecnicas;
    
    @Column(nullable = false)
    private String categoria;
    
    @Column(name = "fecha_creacion", updatable = false)
    private LocalDateTime fechaCreacion;

    @PrePersist
    protected void onCreate() {
        this.fechaCreacion = LocalDateTime.now();
        if (this.stock == null) {
            this.stock = 0;
        }
    }
}