import React, { useEffect, useState } from 'react';
import '../componentsStyles/Event.css'
import AddEvent from '../components/AddEvent';


function Eventos() {
    const [eventos, setEventos] = useState([]);
    const [showAgregarEvento, setShowAgregarEvento] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/api/eventos')
            .then((response) => response.json())
            .then((data) => setEventos(data))
            .catch((error) => console.error('Error al obtener eventos:', error));
    }, []);

    const handleShowAgregarEvento = () => {
        setShowAgregarEvento(true);
    };

    const handleCloseAgregarEvento = () => {
        setShowAgregarEvento(false);
    };

    return (
        <div className="eventos-container">
            <h2>University Events</h2>
            {eventos.length > 0 ? (
                eventos.map((evento) => (
                    <div key={evento.id_evento} className="evento-card">
                        <h3>{evento.nombre_evento}</h3>
                        <p>{evento.descripcion}</p>
                        <p><strong>Date:</strong> {new Date(evento.fecha).toLocaleDateString()}</p>
                        <p><strong>Career:</strong> {evento.nombre_carrera}</p>
                        {evento.imagen && (
                            <img src={`http://localhost:5000/${evento.imagen}`} alt={evento.nombre_evento} />
                        )}
                    </div>
                ))
            ) : (
                <p>No events available.</p>
            )}
            <button onClick={handleShowAgregarEvento}>Add Event</button>

            {/* Modal para agregar eventos */}
            {showAgregarEvento && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <AddEvent onClose={handleCloseAgregarEvento} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Eventos;
