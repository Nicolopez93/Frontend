import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './detalle.css';
import { ReservaContext } from '../../../context/ReservaContext';
import { AuthContext } from '../../../auth/context/AuthContext';

const Detalle = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { addReserva } = useContext(ReservaContext);

  const fechaRetiro = JSON.parse(localStorage.getItem('fechaReserva'))?.fechaRetiro;
  const fechaDevolucion = JSON.parse(localStorage.getItem('fechaReserva'))?.fechaDevolucion;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/autos/buscar/${id}`)
      .then((response) => {
        setAuto(response.data);
      })
      .catch((error) => {
        console.error('Error fetching auto:', error);
      });
  }, [id]);

  const handleReserva = async () => {
    await addReserva({
      auto: auto,
      fecha: {
        fechaRetiro: fechaRetiro,
        fechaDevolucion: fechaDevolucion,
      },
    });

    try {
      const userReserva = {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        telefono: user.telefono,
        auto: auto,
        fecha: {
          fechaRetiro: fechaRetiro,
          fechaDevolucion: fechaDevolucion,
        },
      };

      const response = await axios.post(
        'http://localhost:3000/reserva',
        userReserva
      );

      console.log(response.data);
      navigate('/reserva');
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <>
      <section className='detalle-section'>
        <Link className='detalle-volver-btn' to='/'>
          Volver
        </Link>
        {auto ? (
          <div className='detalle-content'>
            <div className='detalle-info-container'>
              <h2 className='detalle-title'>
                {auto.marca} {auto.modelo}
              </h2>
              <Link to={`/GaleriaDeImagenes/${auto.id}`}>
                <button className='detalle-btn'>Ver Galería</button>
              </Link>
              <Link to={`/Caracteristicas/${auto.id}`}>
                <button className='detalle-btn'>Ver características</button>
              </Link>
              <button className='detalle-btn'>
                Retiro {fechaRetiro ? fechaRetiro : ''}
              </button>
              <button className='detalle-btn'>
                Devolución {fechaDevolucion ? fechaDevolucion : ''}
              </button>
              {user ? (
                <Link to ='/reserva'>
                  <button
                  className='py-2 px-4 w-[15rem] bg-orange-500 my-2 text-[1.15rem]'
                  onClick={handleReserva}>
                  Reservar
                </button>
                </Link>
              ) : (
                <Link to='/login'>
                  <button className='py-2 px-4 w-[15rem] bg-orange-500 my-2 text-[1.15rem]'>
                    Iniciar sesión
                  </button>
                </Link>
              )}
            </div>
            <div className='detalle-img-container'>
              <img
                className='detalle-img'
                src={auto.imgUrl}
                alt={auto.marca}
              />
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </section>
    </>
  );
};

export default Detalle;
