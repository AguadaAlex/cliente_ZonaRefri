import React from 'react';
import logoRefri from '../assets/logo-refri.jpeg';

function Contacto() {
  return (
    <div className="container my-5">
      
      {/* Encabezado Principal con Logo */}
      <div className="text-center mb-5">
        <img 
          src={logoRefri} 
          alt="Logo Zona Refri" 
          className="shadow-sm mb-3"
          style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #ff8c00' }} 
        />
        <h1 className="fw-black text-uppercase display-5" style={{ color: '#003566' }}>
          CONTACTANOS
        </h1>
        <div className="mx-auto rounded-pill" style={{ width: '80px', height: '4px', backgroundColor: '#ff8c00' }}></div>
      </div>

      {/* FILA 1 DE CONTACTO (Dirección, Teléfono/WhatsApp, Horarios) */}
      <div className="row text-center g-4 mb-5">
        
        {/* Ubicación */}
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
            <div className="fs-1 mb-2" style={{ color: '#ff8c00' }}>📍</div>
            <h5 className="fw-bold text-uppercase" style={{ color: '#003566' }}>Dirección</h5>
            <p className="text-muted small mb-0">
              Calle 1 N° 3155<br />
              Berazategui – Buenos Aires – Argentina
            </p>
          </div>
        </div>

        {/* Teléfono y WhatsApp */}
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
            <div className="fs-1 mb-2" style={{ color: '#ff8c00' }}>📞</div>
            <h5 className="fw-bold text-uppercase" style={{ color: '#003566' }}>Contacto Directo</h5>
            <p className="text-muted small mb-1">
              <strong>Vicente Gastón Aguada:</strong>
            </p>
            <p className="fw-bold fs-5 mb-0" style={{ color: '#003566' }}>
              11-2302-8129
            </p>
          </div>
        </div>

        {/* Horarios */}
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
            <div className="fs-1 mb-2" style={{ color: '#ff8c00' }}>⏰</div>
            <h5 className="fw-bold text-uppercase" style={{ color: '#003566' }}>Horarios de Atención</h5>
            <p className="text-muted small mb-0">
              Lunes a viernes de 08:00 a 17:00 hs<br />
              Sábados de 08:30 a 13:00 hs
            </p>
          </div>
        </div>

      </div>

      {/* FILA 2 DE CONTACTO (Mails corporativos y Redes Sociales) */}
      <div className="row text-center g-4">
        
        {/* Casa Central / Consultas Generales */}
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
            <div className="fs-1 mb-2" style={{ color: '#003566' }}>✉️</div>
            <h6 className="fw-bold text-uppercase" style={{ color: '#003566' }}>Casa Central</h6>
            <p className="text-muted small mb-0">
              info@zonarefri.com.ar
            </p>
          </div>
        </div>

        {/* Ventas */}
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border">
            <div className="fs-1 mb-2" style={{ color: '#003566' }}>🛍️</div>
            <h6 className="fw-bold text-uppercase" style={{ color: '#003566' }}>Ventas y Presupuestos</h6>
            <p className="text-muted small mb-0">
              ventas@zonarefri.com.ar
            </p>
          </div>
        </div>

        {/* Redes Sociales Oficiales */}
        <div className="col-md-4">
          <div className="p-4 bg-white rounded-4 shadow-sm h-100 border d-flex flex-column justify-content-center align-items-center">
            <div className="fs-1 mb-2" style={{ color: '#003566' }}>🌐</div>
            <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#003566' }}>Redes Sociales</h6>
            
            <div className="d-flex gap-3">
              <a 
                href="https://www.instagram.com/zonarefri/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sm fw-bold text-white px-3 py-2 rounded-pill"
                style={{ backgroundColor: '#ff8c00' }}
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100083039545645&mibextid=ZbWKwL" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sm fw-bold text-white px-3 py-2 rounded-pill"
                style={{ backgroundColor: '#003566' }}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Contacto;