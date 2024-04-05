import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../auth/context/AuthContext';
import { useContext } from 'react';
import  Button  from '../../common/button/Button';

const Favoritos = () => {
  const [autos, setAutos] = useState([]);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    axios
      .get(`http://54.174.114.93/Proyecto-0.0.1-SNAPSHOT/favoritos/usuario/${user?.id}`)
      .then((response) => {
        setAutos(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener autos:', error);
      });
  }, []);

  return (
    <>
      <section className=" bg-[#f5f5f5] min-h-[calc(100vh-110px)]   ">
        <div className='mx-[4vw] pt-8 '>
        <Link to="/">
          <Button>Volver</Button>
        </Link>
        <h2 className="text-4xl  font-bold my-8 text-center" >Tus Vehiculos Favoritos</h2>
        <div className="flex flex-wrap gap-4 justify-between items-center w-full">
          {autos.map((auto) => (
            <Card key={auto.id} auto={auto} />
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Favoritos;