package com.zonarefri.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {

    @Autowired
    private Cloudinary cloudinary;

    // Cambiamos 'Map' por 'Map<String, Object>' o 'Map<?, ?>'
    public Map<String, Object> upload(MultipartFile multipartFile) throws IOException {
        @SuppressWarnings("unchecked")
        Map<String, Object> result = cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.emptyMap());
        return result;
    }
}