import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {  FaDoorOpen, FaSuitcase, FaUser} from 'react-icons/fa';
import axios from "axios";
import Button from "../../common/button/Button";

const Caracteristicas = () => {

    const { id } = useParams();
    const [auto, setAuto] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/autos/buscar/${id}`)
            .then((response) => {
                setAuto(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    [id]);
    console.log(auto);

  return (
    <>
    <section className=" bg-[#f5f5f5] min-h-screen">
    <div className='mx-[4vw] pt-8 '>
        <Link to={`/detalle/${auto?.id}`}>
          <Button>Volver</Button>
        </Link>
    </div>
    {auto ? (
      <div className="flex gap-20 justify-between items-center mx-[4vw] ">
        <div className=" basis-1/2 flex flex-col gap-4 p-4 shadow-lg border-2 border-[#0C4D9C] rounded-xl bg-slate-200">
          <h2 className="text-2xl font-medium text-gray-900 ">{auto?.marca} {auto?.modelo}</h2>
          <p className="text-lg font-medium text-gray-900"> Puertas :  {auto?.puertas}</p>
          <p className="text-lg font-medium text-gray-900"> Valijas :  {auto?.valijas}</p>
          <p className="text-lg font-medium text-gray-900"> Personas : {auto?.personas}</p>
          <p className="text-lg font-medium text-gray-900">Precio : $ {auto?.precio}</p>
        </div>
        <div className="basis-1/2">
          <img className="" src={auto?.imgUrl} alt={auto?.nombre} />
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    </section>
    </>
  );
};
    
export default Caracteristicas;
