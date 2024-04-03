import React from 'react';
import { Link } from 'react-router-dom';


const TipoDeAuto = () => {
    

    return (
        <>
          <div className='bg-cover bg-center h-[63vh]' style={{backgroundImage: 'url("https://media.kasperskydaily.com/wp-content/uploads/sites/87/2015/05/05201736/rentacar-featured.jpg")', backgroundSize: 'cover'}}>
            <h2 className="text-4xl font-bold text-center text-white">ALQUILER DE AUTOS EN LATINOAMÉRICA</h2>
            <div className="flex flex-row  gap-4 justify-center items-stretch ">
              <Link to="/flotaDeAutos">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Autos</button>
              </Link>
              <Link to="/flotaDeCamioneta">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Camionetas</button>
              </Link>
            </div>
          </div>
        </>
      );
    }      

export default TipoDeAuto;
