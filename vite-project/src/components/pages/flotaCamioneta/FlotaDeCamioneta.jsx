import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import { Link } from 'react-router-dom';
import './flotaDeCamioneta.css';
import  Button  from '../../common/button/Button';

const FlotaDeCamioneta = () => {
  const [autos, setAutos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/autos")
      .then(response => {
        const autosCategoriaCamioneta = response.data.filter(auto => auto.categoria && auto.categoria.nombre === "Camioneta");
        setAutos(autosCategoriaCamioneta);
      })
      .catch(error => {
        console.error("Error fetching autos:", error);
      });
  }, []);

  return (
    <>
      <section className=" bg-[#f5f5f5] min-h-[calc(100vh-110px)]  ">
      <div className='mx-[4vw] pt-8 '>
        <Link to="/">
          <Button>Volver</Button>
        </Link>
        <h2 className="text-4xl  font-bold my-8 text-center" >Flota de Camionetas</h2>
        <div className="flex flex-wrap gap-4 justify-between items-center w-full">
          {autos.map(auto => (
            <Card key={auto.id} auto={auto} />
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default FlotaDeCamioneta;
