package com.zonarefri.repositories;

import com.zonarefri.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Permite filtrar por categoría en el frontend
    List<Producto> findByCategoria(String categoria);

    // Permite buscar productos por coincidencia en el nombre (ignora mayúsculas/minúsculas)
    List<Producto> findByNombreContainingIgnoreCase(String nombre);
}