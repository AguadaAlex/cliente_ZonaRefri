import { useState } from 'react';

const FormularioProducto = ({ onClose }) => {
    // Definimos el estado para los campos que espera tu Backend
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        stock: 0,
        categoria: 'Repuestos' // Valor inicial sugerido
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
                onClose(); // Cierra el modal
                window.location.reload(); // Refresca la página para mostrar el nuevo producto
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
            <input className="form-control" placeholder="Nombre" onChange={e => setProducto({...producto, nombre: e.target.value})} required />
            <input className="form-control" type="number" placeholder="Precio" onChange={e => setProducto({...producto, precio: e.target.value})} required />
            <textarea className="form-control" placeholder="Descripción" onChange={e => setProducto({...producto, descripcion: e.target.value})} />
            <input className="form-control" type="number" placeholder="Stock" onChange={e => setProducto({...producto, stock: parseInt(e.target.value)})} />
            <button type="submit" className="btn btn-primary fw-bold">Guardar Producto</button>
        </form>
    );
};

export default FormularioProducto;