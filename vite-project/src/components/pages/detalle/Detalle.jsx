import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './detalle.css'
import { ReservaContext } from '../../../context/ReservaContext'

const Detalle = () => {
  const { id } = useParams()
  const [auto, setAuto] = useState(null)

  const { fechaSeleccionada } = useContext(ReservaContext)

  console.log(fechaSeleccionada)

  useEffect(() => {
    axios
      .get(`http://localhost:8080/autos/buscar/${id}`)
      .then((response) => {
        setAuto(response.data)
      })
      .catch((error) => {
        console.error('Error fetching auto:', error)
      })
  }, [id])

  return (
    <>
      <section className='detalle-section'>
        <p>Fecha seleccionada: {fechaSeleccionada.fechaRetiro}</p>
        <Link
          className='detalle-volver-btn'
          to='/'>
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
               Retiro {fechaSeleccionada.fechaRetiro}
              </button>
              <button className='detalle-btn'>
               Devolución {fechaSeleccionada.fechaDevolucion}
              </button>
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
  )
}

export default Detalle
