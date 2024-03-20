import React, { useState } from 'react'
import imgAuto from '../../../assets/renegade-jelly-2023-576x340-1-1.png'
import './buscador.css'

const Buscador = ({ onSearchResults }) => {
  const [formData, setFormData] = useState({
    fechaRetiro: '',
    fechaDevolucion: '',
  })

  const [filteredAutos, setFilteredAutos] = useState([])

  const buscarVehiculo = (vehiculo) => {
    fetch(`http://localhost:3000/autos`)
      .then((res) => res.json())
      .then((data) => {
        // const autos = data.filter( a => a.marca.toLowerCase() === vehiculo.toLowerCase() || a.nombre.toLowerCase() === vehiculo.toLowerCase())
        setFilteredAutos(data)
        onSearchResults(data)
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching autos:', error)
      })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(formData)
    buscarVehiculo(formData.auto)
    setFormData({
      fechaRetiro: '',
      fechaDevolucion: '',
    })
  }

  const { auto, fechaDevolucion, fechaRetiro } = formData

  return (
    <div className='buscador-container'>
      <form onSubmit={handleSubmit}>
        <div className='select-container'>
          {/* <input
            name='auto'
            required
            type='text'
            placeholder='Buscar autos...'
            value={auto}
            onChange={handleChange}
          /> */}
          <input
            name='fechaRetiro'
            required
            type='date'
            placeholder='Fecha de Retiro'
            value={fechaRetiro}
            onChange={handleChange}
          />
          <input
            name='fechaDevolucion'
            required
            type='date'
            placeholder='Fecha de Devolución'
            value={fechaDevolucion}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='buscar-autos-button'>
            Buscar
          </button>
        </div>
      </form>
      <img
        src={imgAuto}
        alt='auto'
        className='auto-img'
      />
    </div>
  )
}
export default Buscador
