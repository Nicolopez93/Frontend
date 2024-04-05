import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../common/button/Button";

const PoliticasDeUso = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);

  useEffect(() => {
    axios
      .get(`http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/autos/buscar/${id}`)
      .then((response) => {
        setAuto(response.data);
      })
      .catch((error) => {
        console.error("Error fetching auto:", error);
      });
  }, [id]);
  console.log(auto);

  return (
    <>
      <section className="text-gray-600 bg-gray-100">
        <div className="container mx-auto  px-10 py-32">
          <Link to={`/detalle/${auto?.id}`}>
            <Button>Volver</Button>
          </Link>
          <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
            Políticas de uso
          </h2>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
              <div className="p-4 rounded-lg bg-gray-200 basis-1/2 ">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  1 - Reserva y Pagos:
                </h4>
                <p className="leading-relaxed">
                  Todos los alquileres deben reservarse con anticipación a
                  través de nuestro sitio web o en persona en nuestras oficinas.
                  Se requiere un depósito o pago completo al momento de la
                  reserva para confirmar tu alquiler. Aceptamos varias formas de
                  pago, incluyendo tarjetas de crédito/débito y efectivo.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-200 basis-1/2">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  2 - Requisitos del Conductor:
                </h4>
                <p className="leading-relaxed">
                  El conductor debe tener al menos 21 años de edad. Se requiere
                  una licencia de conducir válida y vigente al momento de la
                  recogida del vehículo. El conductor debe presentar una
                  identificación válida, como pasaporte o documento nacional de
                  identidad.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
              <div className="p-4 rounded-lg bg-gray-200 basis-1/2">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  3 - Seguro y Responsabilidad:
                </h4>
                <p className="leading-relaxed">
                  Todos nuestros vehículos están asegurados con cobertura
                  completa. Se puede ofrecer seguro adicional por un cargo
                  adicional para cubrir daños o pérdidas adicionales. El
                  conductor es responsable de cualquier daño o pérdida causada
                  al vehículo durante el período de alquiler, sujeto a los
                  términos y condiciones del contrato de alquiler.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-200 basis-1/2">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  4 - Uso del Vehículo:
                </h4>
                <p className="leading-relaxed">
                  El vehículo debe ser utilizado únicamente para fines legales y
                  permitidos por las leyes locales. No se permite fumar ni
                  transportar mascotas en el vehículo. Se requiere el uso de
                  cinturón de seguridad en todo momento.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
              <div className="p-4 rounded-lg bg-gray-200 basis-1/2">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  5 - Entrega y Devolución:
                </h4>
                <p className="leading-relaxed">
                  La recogida y devolución del vehículo deben realizarse en las
                  ubicaciones designadas y en los horarios acordados. Se pueden
                  aplicar cargos por devoluciones tardías o cambios en la
                  ubicación de entrega.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-200 basis-1/2">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  6 - Cancelación:
                </h4>
                <p className="leading-relaxed">
                  Se puede cancelar el alquiler en cualquier momento antes de la
                  fecha de recogida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliticasDeUso;
