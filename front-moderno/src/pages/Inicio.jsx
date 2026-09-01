import React from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid px-0">
      
      {/* 1. HERO BANNER PRINCIPAL (Fondo oscuro con texto e imagen destacada) */}
      <section 
        className="py-5 text-white position-relative" 
        style={{ 
          backgroundColor: '#002855', 
          backgroundImage: 'linear-gradient(rgba(0,40,85,0.85), rgba(0,40,85,0.85)), url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '380px'
        }}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge px-3 py-2 fw-bold text-dark mb-3" style={{ backgroundColor: '#ff8c00' }}>
                ZONA REFRI
              </span>
              <h1 className="display-4 fw-black text-uppercase text-white">
                EQUIPAMIENTO Y REFRIGERACIÓN
              </h1>
              <p className="fs-5 opacity-90 mt-2">
                Equipos, insumos y repuestos oficiales de alta performance para tu hogar o comercio.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* 2. BLOQUES DE INFORMACIÓN (Productos, Mensajes, Fábrica, Horarios) */}
      <section className="container my-4">
        <div className="row g-0 shadow-lg rounded-3 overflow-hidden border">
          
          {/* BLOQUE 1: PRODUCTOS */}
          <div className="col-lg-3 col-md-6 d-flex flex-column border-end">
            <div className="p-3 text-white text-center fw-bold text-uppercase fs-5" style={{ backgroundColor: '#ff8c00' }}>
              📦 PRODUCTOS
            </div>
            <div className="p-4 bg-white d-flex flex-column justify-content-between flex-grow-1">
              <p className="text-muted fw-semibold mb-4">
                ¡Encontrá el electrodoméstico o repuesto ideal para tu equipo!
              </p>
              <button 
                className="btn fw-bold text-white border-0 align-self-start px-4 py-2" 
                style={{ backgroundColor: '#ff8c00' }}
                onClick={() => navigate('/productos')}
              >
                Ver más →
              </button>
            </div>
          </div>

          {/* BLOQUE 2: MENSAJES */}
          <div className="col-lg-3 col-md-6 d-flex flex-column border-end">
            <div className="p-3 text-white text-center fw-bold text-uppercase fs-5" style={{ backgroundColor: '#ff8c00' }}>
              ✉️ MENSAJES
            </div>
            <div className="p-4 bg-white flex-grow-1">
              <p className="mb-1" style={{ color: '#003566' }}><strong>Por Ventas:</strong></p>
              <p className="small text-muted mb-3">ventas@zonarefri.com.ar</p>
              
              <p className="mb-1" style={{ color: '#003566' }}><strong>Por RRHH:</strong></p>
              <p className="small text-muted mb-3">recursos@zonarefri.com.ar</p>
              
              <p className="mb-1" style={{ color: '#003566' }}><strong>Casa Central:</strong></p>
              <p className="small text-muted mb-0">info@zonarefri.com.ar</p>
            </div>
          </div>

          {/* BLOQUE 3: FÁBRICA / SUCURSAL */}
          <div className="col-lg-3 col-md-6 d-flex flex-column border-end">
            <div className="p-3 text-white text-center fw-bold text-uppercase fs-5" style={{ backgroundColor: '#ff8c00' }}>
              📍 FÁBRICA
            </div>
            <div className="p-4 bg-white d-flex flex-column justify-content-between flex-grow-1">
              <div>
                <p className="mb-1" style={{ color: '#003566' }}><strong>Casa Central:</strong></p>
                <p className="small text-muted mb-3">
                  Calle 1 N° 3155, Berazategui<br />Buenos Aires - Argentina
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Berazategui" 
                target="_blank" 
                rel="noreferrer" 
                className="btn fw-bold text-white border-0 align-self-start px-4 py-2"
                style={{ backgroundColor: '#ff8c00' }}
              >
                Ver mapa
              </a>
            </div>
          </div>

          {/* BLOQUE 4: HORARIOS SOS */}
          <div className="col-lg-3 col-md-6 d-flex flex-column">
            <div className="p-3 text-white text-center fw-bold text-uppercase fs-5" style={{ backgroundColor: '#003566' }}>
              ⚡ SOS REFRI
            </div>
            <div className="p-4 flex-grow-1" style={{ backgroundColor: '#f8f9fa' }}>
              <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#003566' }}>HORARIOS DE ATENCIÓN</h6>
              <p className="small mb-1"><strong>Lunes a viernes:</strong> 8 a 17hs</p>
              <p className="small mb-1"><strong>Sábados:</strong> 8:30 a 13hs</p>
              <p className="small mb-3"><strong>Domingos y Feriados:</strong> Cerrado</p>
              
              <div className="border-top pt-3 mt-2">
                <small className="fw-bold d-block text-danger">Atención Urgencias:</small>
                <strong className="fs-6" style={{ color: '#003566' }}>📞 (011) 2302-8129</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Inicio;