import React, { useState, useEffect } from 'react';

const GaleriaDeImagenes = () => {
  const [autos, setAutos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ruta-de-tu-api/autos');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setAutos(data.autos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {autos ? (
        <div>
          {autos.map(auto => (
            <div key={auto.id}>
              {auto.imagenes.map((imagen, index) => (
                <div key={index}>
                  <img src={imagen.url} alt={`Imagen ${index + 1}`} />
                  <img src={imagen.url1} alt={`Imagen ${index + 2}`} />
                  <img src={imagen.url2} alt={`Imagen ${index + 3}`} />
                  <img src={imagen.url3} alt={`Imagen ${index + 4}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default GaleriaDeImagenes;
