import React, { useState } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import logoRobot from './assets/logo-refri.jpeg';

// Importación de componentes desde la carpeta src/pages
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Empresa from './pages/Empresa';
import Contacto from './pages/Contacto';

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [usuario, setUsuario] = useState({ rol: 'CLIENTE' });

  const handleBuscar = (e) => {
    e.preventDefault();
    if (terminoBusqueda.trim()) {
      window.location.href = `/productos?buscar=${encodeURIComponent(terminoBusqueda)}`;
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      
      {/* HEADER / NAVBAR PRINCIPAL */}
      <header style={{ backgroundColor: '#ff9f43', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} className="sticky-top">
        <div className="container-fluid px-md-5 py-3">
          <div className="row align-items-center">
            
            {/* LOGO */}
            <div className="col-auto">
              <Link to="/" className="d-flex align-items-center gap-3 text-decoration-none">
                <img 
                  src={logoRobot} 
                  alt="Logo Zona Refri" 
                  style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} 
                />
                <div className="text-white">
                  <h1 className="m-0" style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Zona Refri</h1>
                  <small style={{ fontSize: '0.85rem', fontWeight: '600', opacity: '0.9' }}>📞 11-2302-8129</small>
                </div>
              </Link>
            </div>

            {/* BUSCADOR */}
            <div className="col">
              <form onSubmit={handleBuscar} className="input-group shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden', maxWidth: '650px', margin: '0 auto' }}>
                <input 
                  type="text" 
                  className="form-control border-0 py-2 px-3" 
                  placeholder="¿Qué repuesto estás buscando hoy?" 
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
                <button type="submit" className="btn btn-primary px-4 border-0" style={{ backgroundColor: '#007bff' }}>
                  🔍
                </button>
              </form>
            </div>

            {/* CAMBIO DE ROL */}
            <div className="col-auto">
              <button 
                className="btn btn-sm btn-dark opacity-75 fw-bold" 
                onClick={() => setUsuario({ rol: usuario.rol === 'ADMIN' ? 'CLIENTE' : 'ADMIN' })}
              >
                MODO: {usuario.rol}
              </button>
            </div>
          </div>

          {/* RUTAS DE NAVEGACIÓN */}
          <nav className="d-flex gap-4 mt-3 text-white fw-bold px-2" style={{ fontSize: '1rem' }}>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white border-bottom border-3 pb-1 text-decoration-none" : "text-white opacity-75 text-decoration-none"}>Inicio</NavLink>
            <NavLink to="/productos" className={({ isActive }) => isActive ? "text-white border-bottom border-3 pb-1 text-decoration-none" : "text-white opacity-75 text-decoration-none"}>Catálogo</NavLink>
            <NavLink to="/servicios" className={({ isActive }) => isActive ? "text-white border-bottom border-3 pb-1 text-decoration-none" : "text-white opacity-75 text-decoration-none"}>Servicios</NavLink>
            <NavLink to="/empresa" className={({ isActive }) => isActive ? "text-white border-bottom border-3 pb-1 text-decoration-none" : "text-white opacity-75 text-decoration-none"}>Empresa</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "text-white border-bottom border-3 pb-1 text-decoration-none" : "text-white opacity-75 text-decoration-none"}>Contacto</NavLink>
          </nav>
        </div>
      </header>

      {/* RUTAS DE LAS PÁGINAS */}
      <main>
        <Routes>
          <Route path="/" element={<Inicio usuario={usuario} />} />
          <Route path="/productos" element={<Productos usuario={usuario} />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;