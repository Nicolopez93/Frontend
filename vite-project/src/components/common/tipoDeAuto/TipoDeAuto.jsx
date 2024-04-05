import React from "react";
import { Link } from "react-router-dom";

const TipoDeAuto = () => {
  return (
      <div
        className="bg-cover bg-center h-[63vh] flex flex-col justify-center items-center bg-[url('https://media.kasperskydaily.com/wp-content/uploads/sites/87/2015/05/05201736/rentacar-featured.jpg')]"
      >
        <div className="h-[18rem]">
        <div className="flex flex-row  gap-4 justify-center items-stretch ">
          <Link to="/flotaDeAutos">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Autos
            </button>
          </Link>
          <Link to="/flotaDeCamioneta">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Camionetas
            </button>
          </Link>
        </div>
      </div>
      </div>
  );
};

export default TipoDeAuto;
