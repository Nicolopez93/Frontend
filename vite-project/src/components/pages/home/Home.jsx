import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import styles from '../home/home.module.css';
import Buscador from '../../common/buscador/Buscador';
import TipoDeAuto from '../../common/tipoDeAuto/TipoDeAuto';
import { ReservaContext } from '../../../context/ReservaContext';
import Recomendacion from '../../common/recomendacion/Recomendacion';
const Home = () => {
  const [autos, setAutos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/autos')
      .then((res) => {
        setAutos(res.data);
      })
      .catch((err) => {
        console.error('Error al obtener los autos:', err);
      });
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleFormSubmit = (formData) => {
    setFecha(formData);
  };

  const autosToDisplay =
    searchResults.length > 0 ? searchResults.slice(0, 10) : autos.slice(0, 10);

  return (
    <>
      <div>
        <Buscador onSearchResults={handleSearchResults} onFormSubmit={handleFormSubmit} />
      </div>
      
      {searchResults.length > 0 ? (
        <>
          <div className={styles.busqueda}>
            <h1>Vehículos disponibles para las</h1>
            {fecha && (
              <>
                <p className={styles.subtitulo}>
                  Fecha de retiro: {fecha.fechaRetiro}
                </p>
                <p className={styles.subtitulo}>
                  Fecha de devolución: {fecha.fechaDevolucion}
                </p>
              </>
            )}
          </div>
          <div className={styles.containerCards}>
            {autosToDisplay.map((auto) => (
              <Card key={auto.id} auto={auto} reserva={fecha} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <TipoDeAuto />
          </div>
          <Recomendacion />
          <div>
            <h2
              style={{
                textAlign: 'center',
                fontSize: '2rem',
                color: '#21408E',
                fontWeight: 'bold',
                fontFamily: 'San Francisco, Arial, sans-serif',
              }}
            >
              Nuestros autos
            </h2>
          </div>
          <div className={styles.containerCards}>
            {autos.map((auto) => (
              <Card key={auto.id} auto={auto} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
