import React, { useState } from 'react';

function Productos({ productos, errorProductos, usuario }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('TODOS');

  // Categorías requeridas para Zona Refri
  const categorias = [
    'TODOS',
    'Heladeras y freezer',
    'Calefacción',
    'Ventilación',
    'Cocinas',
    'Herramientas',
    'Repuestos'
  ];

  // Filtrado dinámico por categoría
  const productosFiltrados = categoriaSeleccionada === 'TODOS'
    ? productos
    : productos?.filter((p) => 
        p.categoria?.toLowerCase() === categoriaSeleccionada.toLowerCase()
      );

  return (
    <section className="container my-5">
      {/* Título Principal */}
      <div className="text-center mb-4">
        <span className="badge px-3 py-2 fw-bold text-dark mb-2" style={{ backgroundColor: '#ff8c00' }}>
          CATÁLOGO ZONA REFRI
        </span>
        <h2 className="fw-bold display-6" style={{ color: '#003566' }}>
          Equipos, Insumos y Repuestos
        </h2>
        <p className="text-muted">Seleccioná una categoría para filtrar el catálogo de productos</p>
      </div>

      {/* Botones de Filtro por Categoría */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn fw-bold px-3 py-2 rounded-pill transition-all ${
              categoriaSeleccionada === cat ? 'shadow' : ''
            }`}
            style={{
              backgroundColor: categoriaSeleccionada === cat ? '#ff8c00' : '#ffffff',
              color: categoriaSeleccionada === cat ? '#ffffff' : '#003566',
              border: `2px solid ${categoriaSeleccionada === cat ? '#ff8c00' : '#003566'}`
            }}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Manejo de Errores de API */}
      {errorProductos && (
        <div className="alert alert-danger text-center shadow-sm rounded-3 my-4">
          ⚠️ Ocurrió un error al cargar el catálogo: {errorProductos}
        </div>
      )}

      {/* Grilla de Tarjetas de Productos */}
      <div className="row g-4">
        {productosFiltrados && productosFiltrados.length > 0 ? (
          productosFiltrados.map((p) => (
            <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
              <div 
                className="card h-100 shadow-sm border-0 position-relative" 
                style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#ffffff' }}
              >
                {/* Imagen del producto traída desde Cloudinary */}
                <div className="bg-light d-flex align-items-center justify-content-center p-3" style={{ height: '220px' }}>
                  <img 
                    src={p.imagenUrl} 
                    className="card-img-top" 
                    alt={p.nombre} 
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                  />
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <span className="badge mb-2 text-uppercase align-self-start" style={{ backgroundColor: '#003566', fontSize: '0.75rem' }}>
                    {p.categoria || 'Zona Refri'}
                  </span>
                  <h5 className="card-title fw-bold" style={{ fontSize: '1.05rem', color: '#003566' }}>
                    {p.nombre}
                  </h5>
                  <p className="card-text text-muted small flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {p.descripcion}
                  </p>
                  
                  <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                    <span className="fw-bold fs-5" style={{ color: '#003566' }}>
                      ${p.precio}
                    </span>
                    
                    {usuario.rol === 'ADMIN' ? (
                      <button className="btn btn-outline-danger btn-sm fw-bold">
                        Eliminar
                      </button>
                    ) : (
                      <button className="btn btn-sm fw-bold text-white px-3" style={{ backgroundColor: '#ff8c00' }}>
                        Comprar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted my-5 py-5">
            <h4 className="fw-bold" style={{ color: '#003566' }}>No hay productos cargados en esta categoría.</h4>
            <p className="small">Probá seleccionando otra categoría arriba o agregá nuevos productos desde el panel admin.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Productos;