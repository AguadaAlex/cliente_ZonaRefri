import { useState } from 'react';

const FormularioProducto = ({ onClose }) => {
    // Estado alineado con los datos del formulario
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        stock: 0,
        categoria: 'Repuestos',
        especificacionesTecnicas: ''
    });

    // Estado específico para almacenar el archivo de la imagen seleccionada
    const [imagenFile, setImagenFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Creamos un FormData para enviar texto y archivos binarios juntos
            const formData = new FormData();
            formData.append("nombre", producto.nombre);
            formData.append("precio", producto.precio);
            formData.append("descripcion", producto.descripcion);
            formData.append("stock", producto.stock);
            formData.append("categoria", producto.categoria);
            formData.append("especificacionesTecnicas", producto.especificacionesTecnicas);
            
            // Si el usuario seleccionó un archivo de imagen, lo agregamos
            if (imagenFile) {
                formData.append("imagen", imagenFile);
            }

            const respuesta = await fetch("http://localhost:8080/api/productos", {
                method: "POST",
                // Nota: No se define el Header "Content-Type" cuando se usa FormData, 
                // el navegador lo configura automáticamente con su respectivo boundary.
                body: formData
            });

            if (respuesta.ok) {
                alert("¡Producto e imagen cargados correctamente!");
                if (onClose) onClose(); // Cierra el modal si existe
                window.location.reload(); // Refresca para ver el cambio
            } else {
                alert("Error al guardar. Revisa la consola del servidor.");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            alert("No se pudo conectar con el servidor de Java.");
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

            {/* Selector de archivos real para la imagen de Cloudinary */}
            <div className="mb-2">
                <label className="form-label text-muted small mb-1">Imagen del producto</label>
                <input 
                    className="form-control" 
                    type="file" 
                    accept="image/*"
                    onChange={e => setImagenFile(e.target.files[0])} 
                />
            </div>

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