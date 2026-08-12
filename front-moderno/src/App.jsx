import React, { useState, useEffect } from 'react'
import logoRobot from './assets/logo-refri.jpeg'
import Registro from './components/Registro' 
import FormularioProducto from './components/FormularioProducto'

function App() {
  const [productos, setProductos] = useState([]);
  const [errorProductos, setErrorProductos] = useState(null);
  const [usuario, setUsuario] = useState({ rol: 'CLIENTE' }); 
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState(''); // Estado para la búsqueda

  // Cargar todos los productos al iniciar
  useEffect(() => {
    cargarProductos('http://localhost:8080/api/productos');
  }, []);

  const cargarProductos = (url) => {
    fetch(url)
      .then(resp => {
        if (!resp.ok) throw new Error('Error al obtener productos');
        return resp.json();
      })
      .then(data => {
        setProductos(data);
        setErrorProductos(null);
      })
      .catch(err => {
        console.error('Fetch productos:', err);
        setErrorProductos(err.message);
      });
  };

  // Función que maneja la búsqueda, filtra y baja automáticamente al catálogo
  const handleBuscar = (e) => {
    e.preventDefault();
    if (!terminoBusqueda.trim()) {
      cargarProductos('http://localhost:8080/api/productos');
      return;
    }
    cargarProductos(`http://localhost:8080/api/productos/buscar?nombre=${encodeURIComponent(terminoBusqueda)}`);
    
    // Desplazamiento automático suave hacia la sección del catálogo
    const seccionCatalogo = document.getElementById('catalogo-productos');
    if (seccionCatalogo) {
      seccionCatalogo.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Sora', sans-serif", overflowX: 'hidden' }}>
      
      {/* 1. HEADER */}
      <header style={{ backgroundColor: '#ff9f43', padding: '20px 0' }}>
        <div className="container-fluid px-md-5">
          <div className="row align-items-center">
            <div className="col-auto">
              <button 
                className="btn btn-sm btn-dark opacity-50" 
                onClick={() => setUsuario({ rol: usuario.rol === 'ADMIN' ? 'CLIENTE' : 'ADMIN' })}
              >
                {usuario.rol}
              </button>
            </div>
            
            <div className="col">
              <form onSubmit={handleBuscar} className="input-group shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden', maxWidth: '750px', margin: '0 auto' }}>
                <input 
                  type="text" 
                  className="form-control border-0 py-3 px-4" 
                  placeholder="¿Qué repuesto estás buscando hoy?" 
                  style={{ fontSize: '1.1rem' }} 
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
                <button type="submit" className="btn btn-primary px-4 border-0" style={{ backgroundColor: '#007bff' }}>
                    <span style={{ fontSize: '1.4rem' }}>🔍</span>
                </button>
              </form>
            </div>
            <div className="col-auto text-white text-end">
              <h1 className="m-0" style={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-1px', lineHeight: '1' }}>Zona Refri</h1>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', opacity: '0.9', marginTop: '5px' }}>📞 11-2302-8129</div>
            </div>
          </div>
          <nav className="d-flex gap-4 mt-4 text-white fw-bold px-md-5" style={{ fontSize: '1rem', opacity: '0.9' }}>
            <span style={{cursor:'pointer'}} onClick={() => cargarProductos('http://localhost:8080/api/productos')}>Todos</span>
            <span style={{cursor:'pointer'}} onClick={() => cargarProductos('http://localhost:8080/api/productos/categoria/Heladeras')}>Heladeras</span>
            <span style={{cursor:'pointer'}} onClick={() => cargarProductos('http://localhost:8080/api/productos/categoria/Lavarropas')}>Lavarropas</span>
            <span style={{cursor:'pointer'}} onClick={() => cargarProductos('http://localhost:8080/api/productos/categoria/Microondas')}>Microondas</span>
            <span style={{cursor:'pointer'}} onClick={() => cargarProductos('http://localhost:8080/api/productos/categoria/Aires')}>Aires</span>
            <span style={{cursor:'pointer'}} onClick={() => cargarProductos('http://localhost:8080/api/productos/categoria/Repuestos')}>Repuestos</span>
          </nav>
        </div>
      </header>

      {/* PANEL DE ADMIN */}
      {usuario.rol === 'ADMIN' && (
        <div className="container mt-3">
          <div className="alert alert-info d-flex justify-content-between align-items-center shadow-sm" style={{borderRadius: '15px'}}>
            <span><strong>Modo Administrador:</strong> Gestionando catálogo.</span>
            <button className="btn btn-primary btn-sm" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
              {mostrarFormulario ? 'Ocultar Formulario' : '+ Agregar Producto'}
            </button>
          </div>
          {mostrarFormulario && (
            <div className="card p-4 mb-4 shadow-sm" style={{borderRadius: '15px', backgroundColor: '#f8f9fa'}}>
              <h4 style={{color: '#00509d'}} className="mb-3">Cargar Nuevo Producto a Zona Refri</h4>
              <FormularioProducto onClose={() => setMostrarFormulario(false)} />
            </div>
          )}
        </div>
      )}

      {/* 2. CARRUSEL */}
      <section className="container-fluid px-md-5 my-4">
        <div id="carouselZonaRefri" className="carousel slide shadow-lg" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselZonaRefri" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#carouselZonaRefri" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselZonaRefri" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner" style={{ borderRadius: '25px', overflow: 'hidden' }}>
            <div className="carousel-item active">
              <div className="row align-items-center g-0" style={{ backgroundColor: '#003566', minHeight: '550px' }}>
                <div className="col-md-6 p-5 text-white">
                  <span className="badge bg-warning text-dark mb-3 fw-bold">OFERTA DE LA SEMANA</span>
                  <h2 className="display-4 fw-bold">Repuestos Heladeras</h2>
                  <p className="fs-4 opacity-75">Soluciones rápidas con repuestos originales.</p>
                  <button className="btn btn-warning btn-lg px-5 mt-3 fw-bold shadow text-dark">Ver Catálogo</button>
                </div>
                <div className="col-md-6 text-center p-4">
                  <img src="http://localhost:8080/images/productos/HeladeraElectrolux_frente.png" className="img-fluid" style={{ maxHeight: '450px', filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.3))' }} alt="Heladera" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center g-0" style={{ backgroundColor: '#ff851b', minHeight: '550px' }}>
                <div className="col-md-6 text-center p-4">
                  <img src="http://localhost:8080/images/productos/frezzerhorizontal_frente.png" className="img-fluid" style={{ maxHeight: '420px', filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.3))' }} alt="Freezer" />
                </div>
                <div className="col-md-6 p-5 text-white text-end">
                  <h2 className="display-4 fw-bold">Freezers Gafa</h2>
                  <p className="fs-4 opacity-75">Equipos reforzados para máxima duración.</p>
                  <button className="btn btn-dark btn-lg px-5 mt-3 fw-bold shadow">Consultar Stock</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="position-relative" style={{ height: '550px', backgroundImage: `url("http://localhost:8080/images/ui/habitacion.jpg")`, backgroundSize: '110%', backgroundPosition: 'bottom center', overflow: 'hidden' }}>
                <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 70%)', zIndex: 1 }}></div>
                <div className="container h-100">
                  <div className="row h-100 align-items-center justify-content-end">
                    <div className="col-md-5 p-5 text-end" style={{ zIndex: 3 }}>
                      <span className="badge bg-danger text-white mb-3 fw-bold px-3 py-2">¡SENTÍ LA FRESCURA!</span>
                      <h2 className="display-5 fw-bold text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Ventiladores de Pie</h2>
                      <p className="fs-5 fw-bold" style={{ color: '#a8d8ff', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Potencia de aire real para tu hogar.</p>
                      <button className="btn btn-warning btn-lg px-5 mt-3 fw-bold shadow border-0">Comprar Ahora</button>
                    </div>
                  </div>
                </div>
                <div className="position-absolute" style={{ bottom: '0px', left: '10%', zIndex: 2, width: '340px' }}>
                  <img src="http://localhost:8080/images/productos/VentiladorDePie_frente.png" alt="Ventilador de Pie" style={{ width: '100%', height: 'auto', maxHeight: '520px', filter: 'drop-shadow(10px 15px 25px rgba(0,0,0,0.4))', display: 'block', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselZonaRefri" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselZonaRefri" data-bs-slide="next"><span className="carousel-control-next-icon"></span></button>
        </div>
      </section>

      {/* SECCIÓN DE PRODUCTOS OBTENIDOS DEL BACKEND (Con ID para el scroll automático) */}
      <section id="catalogo-productos" className="container my-5">
        <h2 className="mb-4 text-center" style={{ color: '#00509d' }}>Catálogo de Productos</h2>
        {errorProductos && <div className="alert alert-danger">No se pudieron cargar los productos: {errorProductos}</div>}
        <div className="row g-4">
          {productos.map(p => (
            <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src={p.imagenUrl} className="card-img-top" alt={p.nombre} style={{ objectFit: 'contain', height: '180px', padding: '10px' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontSize: '1.1rem' }}>{p.nombre}</h5>
                  <p className="card-text text-truncate" style={{ flex: '1' }}>{p.descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="fw-bold" style={{ color: '#007bff' }}>${p.precio}</div>
                    {usuario.rol === 'ADMIN' ? (
                      <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                    ) : (
                      <button className="btn btn-primary btn-sm">Comprar</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN PRINCIPAL (ROBOT) */}
      <main className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-6 p-5 d-flex flex-column justify-content-center bg-white" style={{ minHeight: '80vh' }}>
            <div className="ps-md-5">
              <span className="badge rounded-pill px-4 py-2 mb-4" style={{ backgroundColor: '#e8f0fe', color: '#00509d', fontSize: '1rem', fontWeight: 'bold' }}>🔵 Servicio hoy disponible</span>
              <h2 className="mb-4" style={{ color: '#1a1a1a', fontSize: '4rem', letterSpacing: '-3px', lineHeight: '1.1', fontWeight: '800' }}>Tu electrodoméstico <br /><span style={{ color: '#007bff' }}>merece lo mejor</span></h2>
              <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '20px', border: '1px solid #dee2e6', maxWidth: '450px' }}>
                <Registro />
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#00509d' }}>
              <img src={logoRobot} alt="Robot" style={{ width: '520px', height: '520px', borderRadius: '50%', objectFit: 'cover', border: '15px solid white' }} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;