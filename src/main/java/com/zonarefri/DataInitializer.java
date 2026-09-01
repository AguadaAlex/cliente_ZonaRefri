package com.zonarefri;

import com.zonarefri.model.Producto;
import com.zonarefri.repositories.ProductoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.math.BigDecimal;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(ProductoRepository productoRepository) {
        return args -> {
            // Solo carga los datos si la tabla está vacía para no duplicar
            if (productoRepository.count() == 0) {
                
                // 1. Estufa Eléctrica
                Producto p1 = new Producto();
                p1.setNombre("Estufa Eléctrica Halógena Oscilante 3 Tubos 1400W");
                p1.setCategoria("Climatización");
                p1.setPrecio(new BigDecimal("95000.00"));
                p1.setStock(10);
                p1.setDescripcion("Estufa eléctrica con función oscilante, 3 tubos y corte de seguridad automático por caída y sobrecalentamiento.");
                p1.setImagenUrl("https://res.cloudinary.com/dv4nil03s/image/upload/v1786492388/hnk3laipfjhdvwe0lfof.jpg");
                productoRepository.save(p1);

                // 2. Planchita de Pelo
                Producto p2 = new Producto();
                p2.setNombre("Planchita de Pelo Elegance LED Bella Tourmaline");
                p2.setCategoria("Belleza");
                p2.setPrecio(new BigDecimal("85000.00"));
                p2.setStock(8);
                p2.setDescripcion("Planchita de pelo con diseño ultra slim, patines extra largos y tecnología micro shine que potencia el brillo del cabello.");
                p2.setImagenUrl("https://res.cloudinary.com/dv4nil03s/image/upload/v1786492151/ns7czkyaq6ewjtaueodg.jpg");
                productoRepository.save(p2);

                // 3. Microondas Samsung
                Producto p3 = new Producto();
                p3.setNombre("Microondas Samsung MG23F3K3TAS con Grill 23 Lts");
                p3.setCategoria("Microondas");
                p3.setPrecio(new BigDecimal("650000.00"));
                p3.setStock(5);
                p3.setDescripcion("Microondas Samsung MG23F3K3TAS con modos de cocción preestablecidos, timer y traba para niños. Interior de cerámica antibacteriano.");
                p3.setImagenUrl("https://res.cloudinary.com/dv4nil03s/image/upload/v1786491901/ojx9mcpwu07eekfatzbv.png");
                productoRepository.save(p3);

                // 4. Cocina Escorial
                Producto p4 = new Producto();
                p4.setNombre("Cocina Escorial Candor S2 Negro Gas Envasado");
                p4.setCategoria("Cocinas");
                p4.setPrecio(new BigDecimal("350000.00"));
                p4.setStock(4);
                p4.setDescripcion("Cocina Escorial Candor S2 de diseño clásico en color negro con 4 hornallas, horno y cajón parrilla independiente. Preparada para Gas Envasado.");
                p4.setImagenUrl("https://res.cloudinary.com/dv4nil03s/image/upload/v1786491666/t4pvbnqim6smnpyk4axu.png");
                productoRepository.save(p4);

                // 5. Heladera Whirlpool
                Producto p5 = new Producto();
                p5.setNombre("Heladera Whirlpool No Frost 340 Lts WRM40MK");
                p5.setCategoria("Heladeras");
                p5.setPrecio(new BigDecimal("899999.00"));
                p5.setStock(5);
                p5.setDescripcion("Heladera Whirlpool No Frost WRM40MK diseño Top Mount con estantes removibles y anaqueles. 340 litros netos de almacenamiento y tecnología No Frost.");
                p5.setImagenUrl("https://res.cloudinary.com/dv4nil03s/image/upload/v1786491264/nijcseou6dyy6qo4epyb.png");
                productoRepository.save(p5);

                System.out.println(">>> ¡Catálogo permanente de Zona Refri cargado con éxito en H2!");
            }
        };
    }
}