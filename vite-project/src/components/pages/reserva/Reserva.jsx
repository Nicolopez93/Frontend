import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Reserva = () => {
  const [reservas, setReservas] = useState([])
  //const { fechaSeleccionada } = useContext(ReservaContext)

  useEffect(() => {
    const fechtReservas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/reserva')
        const data = response.data
        setReservas(data)
      } catch (error) {
        console.error('Error fetching reservas:', error)
      }
    }
    fechtReservas()
  }, [])

  const calcularDias = (reservas) => {
    const dias = reservas.map((res) => {
      const fechaRetiro = res.fecha.fechaRetiro.split('-').reverse().join('-')
      const fechaDevolucion = res.fecha.fechaDevolucion
        .split('-')
        .reverse()
        .join('-')

      // Parsear las fechas en el formato correcto
      const retiro = new Date(fechaRetiro)
      const devolucion = new Date(fechaDevolucion)

      //console.log('Fecha de retiro:', retiro);
      //console.log('Fecha de devolución:', devolucion);

      const diasDif = Math.abs(devolucion - retiro)
      //console.log('Diferencia en milisegundos:', diasDif);

      const dias = Math.ceil(diasDif / (1000 * 60 * 60 * 24))
      //console.log('Días de diferencia:', dias);

      return dias
    })
    return dias
  }

  const calcularPrecio = (precio) => {
    const dias = calcularDias(reservas)

    return precio * dias
  }

  console.log(calcularDias(reservas))
  console.log(calcularPrecio(reservas))

  return (
    <main className='bg-[#ffd4ba]  min-h-[calc(100vh-10rem)] '>
      <div className='flex flex-col justify-center mx-[4vw] pt-16 '>
        <h4 className='text-[1.35rem] font-semibold mb-2'>Fecha de reserva</h4>
        <div className='flex gap-4 '>
          {reservas.map((reserva, index) => (
            <div
              key={index}
              className='flex justify-between gap-4 p-4 max-w-[35rem] bg-white rounded-lg shadow-md mb-4'>
              <p className='text-[#0C4D9C] font-semibold'>
                Fecha de retiro: {reserva.fecha.fechaRetiro}
              </p>
              <span> → </span>
              <p className='text-[#0C4D9C] font-semibold'>
                Fecha de devolución: {reserva.fecha.fechaDevolucion}
              </p>
            </div>
          ))}
          <button className='h-14'>Cambiar reserva</button>
        </div>

        <h5 className='text-[1.25rem] font-semibold my-4'>
          Detalle de la reserva
        </h5>
        {reservas.map((res, index) => (
          <article
            key={index}
            className='flex justify-between items-center gap-4 p-4  bg-white rounded-lg shadow-md mb-4 w-3/4'>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='text-[#0C4D9C] font-semibold text-xl'>
                  <span className='font-semibold'>Vehículo: </span>
                  <span>Marca: {res.auto.nombre}</span>
                </p>
                <small>{res.auto.marca}</small>
              </div>
              <p className='text-[#0C4D9C] font-semibold text-xl'>
                Cantidad de puertas: <span> {res.auto.puertas} </span>
              </p>
              <p className='text-[#0C4D9C] font-semibold text-xl'>
                Pasajeros: <span> {res.auto.personas} </span>
              </p>
              <p className='text-[#0C4D9C] font-semibold text-xl'>
                Valijas: <span> {res.auto.valijas} </span>
              </p>
              <p className='text-[#0C4D9C] font-semibold text-xl'>
                <span className='font-semibold'>Transmisión: </span>
                <span>Automática</span>
              </p>
              <p className='text-[#0C4D9C] font-semibold text-xl'>
                <span className='font-semibold'>Precio: </span>
                <span>$ {calcularPrecio(res.auto.precio)}</span>
              </p>
            </div>

            <div className='basis-1/2'>
              {reservas.map((reserva, index) => (
                <div className='w-[30rem]'>
                  <img
                    key={index}
                    src={reserva.auto.imgUrl}
                    alt={reserva.auto.nombre}
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
