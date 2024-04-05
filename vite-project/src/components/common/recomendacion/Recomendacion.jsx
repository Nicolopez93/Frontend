import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';

const Recomendacion = () => { 

  const [autos, setAutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/autos")
      .then(response => {
        setAutos(response.data);
      })
      .catch(error => {
        console.error("Error fetching autos:", error);
      });
  }, []);

  return (
    <div className=" bg-[#91c0f34d] min-h-[calc(75vh-110px)] ">
      <div className='mx-[4vw] pt-8 '>
      <h2 className="text-4xl  font-bold my-8 text-center  ">LOS RECOMENDADOS DE LA SEMANA</h2>
      <div className="flex flex-wrap gap-4 justify-between items-center w-full">
        {autos.slice(8, 10).map(auto => (
          <Card key={auto.id} auto={auto} className="recomendacion-card" />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Recomendacion;
