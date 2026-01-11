package com.zonarefri.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.AccessLevel;
import java.time.LocalDateTime;

@Entity
@Table(name = "envios")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Envio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    private String direccion;
    private String ciudad;
    
    @Column(name = "codigo_postal")
    private String codigoPostal;
    
    @Column(name = "estado_envio")
    private String estadoEnvio;
    
    @Column(name = "tracking_number")
    private String trackingNumber;

    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion;
}
