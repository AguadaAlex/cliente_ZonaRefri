package com.zonarefri.controller;

import com.zonarefri.model.Producto;
import com.zonarefri.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController

@RequestMapping("/api/productos")

@CrossOrigin(origins = "http://localhost:3000")

public class ProductoController {

    @Autowired

    private ProductoService productoService;

    @GetMapping

    public List<Producto> obtenerTodos() {

        return productoService.listarTodos();

    }

    @GetMapping("/categoria/{nombre}")

    public List<Producto> obtenerPorCategoria(@PathVariable String nombre) {

        return productoService.buscarPorCategoria(nombre);

    }

    @PostMapping

    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {

        Producto nuevoProducto = productoService.crearProducto(producto);

        return new ResponseEntity<>(nuevoProducto, HttpStatus.CREATED);

    }

    @DeleteMapping("/{id}")

    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {

        // AQUÍ ESTABA EL ERROR: Ahora el nombre coincide con el del Service

        productoService.eliminarProducto(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}