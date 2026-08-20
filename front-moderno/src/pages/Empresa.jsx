import React from 'react';
import logoRefri from '../assets/logo-refri.jpeg';

function Empresa() {
  return (
    <div className="container my-5">
      
      {/* ENCABEZADO PRINCIPAL CON LOGO */}
      <div className="text-center mb-5">
        <img 
          src={logoRefri} 
          alt="Logo Zona Refri" 
          className="shadow-md mb-3"
          style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #ff8c00' }} 
        />
        <h1 className="fw-black text-uppercase display-5" style={{ color: '#003566' }}>
          NUESTRA HISTORIA
        </h1>
        <div className="mx-auto rounded-pill" style={{ width: '80px', height: '5px', backgroundColor: '#ff8c00' }}></div>
      </div>

      {/* SECCIÓN PRESENTACIÓN DE PROBLEMA / SOLUCIÓN */}
      <div className="p-4 p-md-5 rounded-4 shadow-sm mb-5 text-white" style={{ backgroundColor: '#003566' }}>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <h3 className="fw-bold mb-3" style={{ color: '#ff8c00' }}>
              ¿A quién le confías la reparación de tu hogar?
            </h3>
            <p className="fs-5 opacity-90 mx-auto" style={{ maxWidth: '900px' }}>
              <strong>Zona Refri</strong> nace para responder a las preguntas de cada familia: 
              <em>¿Quién me asesorará con honestidad cuidando mi presupuesto? ¿A quién le abro las puertas de mi casa con total confianza si quiero reparar un equipo o cambiar mi cocina vieja por una nueva?</em>
            </p>
          </div>
        </div>
      </div>

        {/* SECCIÓN DE HITOS DE LA EMPRESA */}
      <div className="position-relative my-5">
        
        {/* Línea vertical central */}
        <div 
          className="position-absolute top-0 bottom-0 start-50 translate-middle-x d-none d-md-block" 
          style={{ width: '4px', backgroundColor: '#ff8c00', zIndex: 0 }}
        ></div>

        {/* HITO 1: Experiencia previa */}
        <div className="row g-0 mb-5 align-items-center position-relative" style={{ zIndex: 1 }}>
          <div className="col-md-6 pe-md-5 text-md-end">
            <div className="bg-white p-4 rounded-4 shadow-sm border border-2" style={{ borderColor: '#003566' }}>
              <span className="badge px-3 py-2 mb-2 text-dark fw-bold" style={{ backgroundColor: '#ff8c00' }}>
                +10 AÑOS DE TRAYECTORIA
              </span>
              <h4 className="fw-bold" style={{ color: '#003566' }}>Experiencia e Innovación</h4>
              <p className="text-muted small mb-0">
                Vicente Gastón Aguada, joven electromecánico con formación en marketing, se desempeñó durante más de una década como técnico especializado para grandes marcas y empresas de primera línea como Carrefour.
              </p>
            </div>
          </div>
          <div className="col-md-6 ps-md-5 mt-3 mt-md-0">
            <div className="p-3 rounded-circle text-white d-inline-block shadow" style={{ backgroundColor: '#003566' }}>
              👨‍🔧
            </div>
          </div>
        </div>

        {/* HITO 2: Nacimiento de Zona Refri */}
        <div className="row g-0 mb-5 align-items-center position-relative" style={{ zIndex: 1 }}>
          <div className="col-md-6 order-md-2 ps-md-5 text-md-start">
            <div className="bg-white p-4 rounded-4 shadow-sm border border-2" style={{ borderColor: '#003566' }}>
              <span className="badge px-3 py-2 mb-2 text-white fw-bold" style={{ backgroundColor: '#003566' }}>
                HACE 5 AÑOS
              </span>
              <h4 className="fw-bold" style={{ color: '#003566' }}>Fundación de Zona Refri</h4>
              <p className="text-muted small mb-0">
                Con la visión de brindar un servicio directo, transparente y honesto, fundó Zona Refri para dar respuesta técnica garantizada a vecinos e industrias locales.
              </p>
            </div>
          </div>
          <div className="col-md-6 order-md-1 pe-md-5 text-md-end mt-3 mt-md-0">
            <div className="p-3 rounded-circle text-dark d-inline-block shadow" style={{ backgroundColor: '#ff8c00' }}>
              🏢
            </div>
          </div>
        </div>

        {/* HITO 3: Actualidad */}
        <div className="row g-0 align-items-center position-relative" style={{ zIndex: 1 }}>
          <div className="col-md-6 pe-md-5 text-md-end">
            <div className="bg-white p-4 rounded-4 shadow-sm border border-2" style={{ borderColor: '#003566' }}>
              <span className="badge px-3 py-2 mb-2 text-dark fw-bold" style={{ backgroundColor: '#ff8c00' }}>
                ACTUALIDAD
              </span>
              <h4 className="fw-bold" style={{ color: '#003566' }}>Asesoramiento Integral</h4>
              <p className="text-muted small mb-0">
                Hoy Zona Refri te acompaña para tomar las mejores decisiones: desde diagnosticar una falla técnica, elegir el repuesto adecuado o renovar tus electrodomésticos con la tranquilidad de contar con un profesional de confianza.
              </p>
            </div>
          </div>
          <div className="col-md-6 ps-md-5 mt-3 mt-md-0">
            <div className="p-3 rounded-circle text-white d-inline-block shadow" style={{ backgroundColor: '#003566' }}>
              ⭐
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Empresa;