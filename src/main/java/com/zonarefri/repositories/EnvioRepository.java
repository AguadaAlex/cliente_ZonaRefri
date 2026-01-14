package com.zonarefri.repositories;

import com.zonarefri.model.Envio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

/**
 * Repositorio para la gestión y seguimiento de envíos.
 */
@Repository
public interface EnvioRepository extends JpaRepository<Envio, Integer> {
    
    /**
     * Busca un envío basado en su número de seguimiento logístico.
     * @param trackingNumber Código de seguimiento de la empresa de transporte.
     * @return Un Optional con la información del envío.
     */
    Optional<Envio> findByTrackingNumber(String trackingNumber);
}
