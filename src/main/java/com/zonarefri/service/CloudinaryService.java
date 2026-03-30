package com.zonarefri.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {

    @Autowired
    private Cloudinary cloudinary; // Aquí es donde Spring inyecta tu "Bean"

    public Map upload(MultipartFile multipartFile) throws IOException {
        File file = convert(multipartFile);
        // Enviamos el archivo a la nube
        Map result = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
        file.delete(); // Importante: borra el archivo temporal de tu servidor
        return result;
    }

    // Método auxiliar para convertir el archivo que viene del frontend
    private File convert(MultipartFile multipartFile) throws IOException {
        File file = new File(multipartFile.getOriginalFilename());
        FileOutputStream fo = new FileOutputStream(file);
        fo.write(multipartFile.getBytes());
        fo.close();
        return file;
    }
}