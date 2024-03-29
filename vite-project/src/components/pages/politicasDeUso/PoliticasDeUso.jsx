import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const PoliticasDeUso = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/autos/buscar/${id}`)
      .then(response => {
        setAuto(response.data);
      })
      .catch(error => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);
 console.log(auto);

  return (
    <>
      <section className="detalle-section">
      <Link className="detalle-volver-btn" to={`/detalle/${auto?.id}`}>Volver</Link>
        <h2 className="detalle-title">Políticas de uso</h2>
        <div className="detalle-Politicas">
        <h4 className='detalle-h4'> 1 - Reserva y Pagos:</h4>
        <p className='detalle-p'>Todos los alquileres deben reservarse con anticipación a través de nuestro sitio web o en persona en nuestras oficinas.
Se requiere un depósito o pago completo al momento de la reserva para confirmar tu alquiler.
Aceptamos varias formas de pago, incluyendo tarjetas de crédito/débito y efectivo.</p>
        <h4 className='detalle-h4'> 2 - Requisitos del Conductor:</h4>    
        <p className='detalle-p'>El conductor debe tener al menos 21 años de edad.
Se requiere una licencia de conducir válida y vigente al momento de la recogida del vehículo.
El conductor debe presentar una identificación válida, como pasaporte o documento nacional de identidad.    </p>
        <h4 className='detalle-h4'> 3 - Seguro y Responsabilidad:</h4>
        <p className='detalle-p'>Todos nuestros vehículos están asegurados con cobertura completa.
Se puede ofrecer seguro adicional por un cargo adicional para cubrir daños o pérdidas adicionales.
El conductor es responsable de cualquier daño o pérdida causada al vehículo durante el período de alquiler, sujeto a los términos y condiciones del contrato de alquiler. </p>
        <h4 className='detalle-h4'> 4 - Uso del Vehículo:</h4>
        <p className='detalle-p'>El vehículo debe ser utilizado únicamente para fines legales y permitidos por las leyes locales.
No se permite fumar ni transportar mascotas en el vehículo.
Se requiere el uso de cinturón de seguridad en todo momento.    </p>
        <h4 className='detalle-h4'> 5 - Entrega y Devolución:</h4>
        <p className='detalle-p'>La recogida y devolución del vehículo deben realizarse en las ubicaciones designadas y en los horarios acordados.
Se pueden aplicar cargos por devoluciones tardías o cambios en la ubicación de entrega. </p>
        <h4 className='detalle-h4'> 6 - Cancelación:</h4>
        <p className='detalle-p'>Se puede cancelar el alquiler en cualquier momento antes de la fecha de recogida. </p>
        </div>
      </section>
    </>
  );
};

export default PoliticasDeUso;
