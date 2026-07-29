import { useState } from 'react';

const FormularioProducto = ({ onClose }) => {
    // Definimos el estado alineado exactamente con los campos del Backend
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        stock: 0,
        categoria: 'Repuestos', // Valor por defecto
        imagenUrl: '',
        especificacionesTecnicas: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch("http://localhost:8080/api/productos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto)
            });

            if (respuesta.ok) {
                alert("¡Producto cargado correctamente!");
                if (onClose) onClose(); // Cierra el modal si existe la función
                window.location.reload(); // Refresca para ver el cambio
            } else {
                alert("Error al guardar. Revisa la consola.");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            alert("No se pudo conectar con el servidor.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input 
                className="form-control" 
                placeholder="Nombre del producto" 
                value={producto.nombre}
                onChange={e => setProducto({...producto, nombre: e.target.value})} 
                required 
            />
            
            <input 
                className="form-control" 
                type="number" 
                step="0.01" 
                placeholder="Precio" 
                value={producto.precio}
                onChange={e => setProducto({...producto, precio: e.target.value})} 
                required 
            />

            <select 
                className="form-control" 
                value={producto.categoria}
                onChange={e => setProducto({...producto, categoria: e.target.value})}
                required
            >
                <option value="Repuestos">Repuestos</option>
                <option value="Electrodomesticos">Electrodomésticos</option>
                <option value="Servicios">Servicios</option>
            </select>

            <input 
                className="form-control" 
                type="number" 
                placeholder="Stock" 
                value={producto.stock}
                onChange={e => setProducto({...producto, stock: parseInt(e.target.value) || 0})} 
            />

            <input 
                className="form-control" 
                placeholder="URL de la imagen (Cloudinary)" 
                value={producto.imagenUrl}
                onChange={e => setProducto({...producto, imagenUrl: e.target.value})} 
            />

            <textarea 
                className="form-control" 
                placeholder="Descripción" 
                value={producto.descripcion}
                onChange={e => setProducto({...producto, descripcion: e.target.value})} 
            />

            <textarea 
                className="form-control" 
                placeholder="Especificaciones técnicas" 
                value={producto.especificacionesTecnicas}
                onChange={e => setProducto({...producto, especificacionesTecnicas: e.target.value})} 
            />

            <button type="submit" className="btn btn-primary fw-bold">Guardar Producto</button>
        </form>
    );
};

export default FormularioProducto;