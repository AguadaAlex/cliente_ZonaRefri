package com.zonarefri.controller;

import com.zonarefri.model.Producto;
import com.zonarefri.service.CloudinaryService;
import com.zonarefri.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping
    public List<Producto> obtenerTodos() {
        return productoService.listarTodos();
    }

    @GetMapping("/categoria/{nombre}")
    public List<Producto> obtenerPorCategoria(@PathVariable String nombre) {
        return productoService.buscarPorCategoria(nombre);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Producto> crearProducto(
            @RequestParam("nombre") String nombre,
            @RequestParam("descripcion") String descripcion,
            @RequestParam("precio") BigDecimal precio,
            @RequestParam("stock") Integer stock,
            @RequestParam("categoria") String categoria,
            @RequestParam(value = "imagen", required = false) MultipartFile imagenFile) {
        
        String urlImagen = null;
        
        try {
            // Si el usuario adjuntó una imagen, la subimos a Cloudinary
            if (imagenFile != null && !imagenFile.isEmpty()) {
                Map uploadResult = cloudinaryService.upload(imagenFile);
                urlImagen = uploadResult.get("url").toString();
            }

            // Creamos el producto y le asignamos los valores recibidos
            Producto producto = new Producto();
            producto.setNombre(nombre);
            producto.setDescripcion(descripcion);
            producto.setPrecio(precio);
            producto.setStock(stock);
            producto.setCategoria(categoria);
            producto.setImagenUrl(urlImagen);

            Producto nuevoProducto = productoService.crearProducto(producto);
            return new ResponseEntity<>(nuevoProducto, HttpStatus.CREATED);
            
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        productoService.eliminarProducto(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}