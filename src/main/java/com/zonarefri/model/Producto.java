package com.zonarefri.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.AccessLevel;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private String descripcion;
    
    @Column(precision = 38, scale = 2)
    private BigDecimal precio;
    
    private Integer stock;
    
    @Column(name = "imagen_url")
    private String imagenUrl;
    
    private String categoria;

    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion;
}
