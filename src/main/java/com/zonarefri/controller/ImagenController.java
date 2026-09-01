
package com.zonarefri.controller;

import com.zonarefri.service.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/imagenes")
@CrossOrigin // Esto permite que Next.js o Vite se conecten sin problemas
public class ImagenController {

    @Autowired
    private CloudinaryService cloudinaryService;

    @PostMapping("/subir")
    public ResponseEntity<Map> subirImagen(@RequestParam("file") MultipartFile file) throws IOException {
        // Llamamos al servicio que creamos antes
        Map resultado = cloudinaryService.upload(file);
        
        // Devolvemos todo el mapa de respuesta de Cloudinary (incluye la URL)
        return new ResponseEntity<>(resultado, HttpStatus.OK);
    }
}