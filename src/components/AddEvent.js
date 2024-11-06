import React, { useState } from 'react';

function AddEvent({ onClose }) {
    const [nombreEvento, setNombreEvento] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [idCarrera, setIdCarrera] = useState('');
    const [imagen, setImagen] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nombre_evento', nombreEvento);
        formData.append('descripcion', descripcion);
        formData.append('fecha', fecha);
        formData.append('id_carrera', idCarrera);
        formData.append('imagen', imagen);

        fetch('http://localhost:5000/api/eventos', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Evento agregado:', data);
                onClose(); // Cerrar el modal después de agregar el evento
            })
            .catch((error) => console.error('Error al agregar evento:', error));
    };

    return (
        <div className="agregar-evento-form">
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Event Name:
                    <input type="text" value={nombreEvento} onChange={(e) => setNombreEvento(e.target.value)} required />
                </label>
                <label>
                    Description:
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </label>
                <label>
                    Date:
                    <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                </label>
                <label>
                    Career ID:
                    <input type="number" value={idCarrera} onChange={(e) => setIdCarrera(e.target.value)} required />
                </label>
                <label>
                    Image:
                    <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default AddEvent;
