import React from 'react';
import logoRefri from '../assets/logo-refri.jpeg';

function Servicios() {
  return (
    <div className="container my-5">
      
      {/* Encabezado Principal */}
      <div className="text-center mb-5">
        <img 
          src={logoRefri} 
          alt="Logo Zona Refri" 
          className="shadow-sm mb-3"
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #ff8c00' }} 
        />
        <h1 className="fw-black text-uppercase display-5" style={{ color: '#003566' }}>
          NUESTROS SERVICIOS
        </h1>
        <p className="text-muted fs-5">Soluciones integrales en refrigeración y electrodomésticos</p>
        <div className="mx-auto rounded-pill" style={{ width: '80px', height: '4px', backgroundColor: '#ff8c00' }}></div>
      </div>

      {/* Grilla de Servicios */}
      <div className="row g-4">
        
        {/* COLUMNA 1: REPARACIÓN DE ELECTRODOMÉSTICOS */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="p-4 text-white text-center" style={{ backgroundColor: '#003566' }}>
              <div className="fs-1 mb-2">🛠️</div>
              <h4 className="fw-bold text-uppercase m-0">
                Reparación de Electrodomésticos
              </h4>
              <small className="opacity-75">Servicio técnico especializado</small>
            </div>
            
            <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
              <p className="text-muted small mb-4">
                Atendido por personal técnico certificado para garantizar el funcionamiento óptimo y la durabilidad de tus equipos:
              </p>
              
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-0">
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Diagnóstico y reparación de heladeras, freezers y exhibidoras.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Mantenimiento preventivo y correctivo de cocinas y hornos.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Asesoramiento técnico personalizado para reparaciones.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Cambio de repuestos e insumos 100% originales.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLUMNA 2: ATENCIÓN PERSONALIZADA A EMPRESAS */}
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="p-4 text-white text-center" style={{ backgroundColor: '#ff8c00' }}>
              <div className="fs-1 mb-2">🏢</div>
              <h4 className="fw-bold text-uppercase m-0 text-dark">
                Atención Personalizada a Empresas
              </h4>
              <small className="text-dark opacity-75">Servicio corporativo exclusivo</small>
            </div>
            
            <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
              <p className="text-muted small mb-4">
                Orientado a mantener en perfecto estado el equipamiento comercial de comercios, industrias y locales de venta de electrodomésticos:
              </p>
              
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-0">
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#003566', fontWeight: 'bold' }}>✓</span>
                  Mantenimiento para casas de comidas y restaurantes.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#003566', fontWeight: 'bold' }}>✓</span>
                  Atención técnica para supermercados y comercios gastronómicos.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#003566', fontWeight: 'bold' }}>✓</span>
                  Equipamiento de refrigeración y electrodomésticos de oficinas.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#003566', fontWeight: 'bold' }}>✓</span>
                  Soporte a empresas comercializadoras de electrodomésticos.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COLUMNA 3: SERVICIO POSTVENTA */}
        <div className="col-lg-4 col-md-12">
          <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="p-4 text-white text-center" style={{ backgroundColor: '#003566' }}>
              <div className="fs-1 mb-2">🤝</div>
              <h4 className="fw-bold text-uppercase m-0">
                Servicio Postventa
              </h4>
              <small className="opacity-75">Garantía y respaldo continuo</small>
            </div>
            
            <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
              <p className="text-muted small mb-4">
                Nos aseguramos de que aproveches al máximo tus equipos comprados o reparados con acompañamiento continuo:
              </p>
              
              <ul className="list-unstyled text-secondary small d-flex flex-column gap-2 mb-0">
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Instalación y puesta en marcha de unidades y aparatos nuevos.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Seguimiento y control de garantía post-reparación.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Asesoramiento directo ante cualquier duda o consulta.
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>✓</span>
                  Envío y entrega de repuestos o insumos a domicilio.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Servicios;