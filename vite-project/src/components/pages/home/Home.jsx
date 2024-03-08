import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import styles from '../home/home.module.css';
import Navbar from '../../common/navbar/Navbar';
import Buscador from '../../common/buscador/Buscador';
import TipoDeAuto from '../../common/tipoDeAuto/TipoDeAuto';
import Recomendacion from '../../common/recomendacion/Recomendacion';
import Footer from '../../common/footer/Footer';

const Home = () => {
    const [autos, setAutos] = useState([]);
    const [dispatchLike, setDispatchLike] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/autos")
            .then(res => {
                setAutos(res.data);
            })
            .catch(err => {
                console.error("Error al obtener los autos:", err);
            });
        setDispatchLike(false);
    }, [dispatchLike]);

    useEffect(() => {
        const filteredAutos = autos.filter((auto) =>
            auto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredAutos);
    }, [searchTerm, autos]);

    const handleLike = (auto) => {
        axios.patch(`http://localhost:5000/autos/${auto.id}`, { isLiked: !auto.isLiked })
            .then(res => setDispatchLike(true))
            .catch(err => {
                console.error("Error al actualizar el estado de like:", err);
            });
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    // Limitar el número de autos mostrados a 10
    const autosToDisplay = searchResults.length > 0 ? searchResults.slice(0, 10) : autos.slice(0, 10);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Buscador onSearch={handleSearch} />
            </div>
            <div className={styles.container}>
                <TipoDeAuto />
            </div>
            <div>
                {autos.length > 0 && (
                    <Recomendacion autos={autos.slice(0, 2)} handleLike={handleLike} />
                )}
            </div>
            <div>
                <h2 style={{ textAlign: "center", fontSize: '2rem', backgroundColor: 'rgba( 145, 192, 243,0.3)', color: '#21408E' , fontWeight: 'bold',fontFamily: 'San Francisco' }}>Nuestros autos</h2>
            </div>
            <div className={styles.containerCards}>
                {autosToDisplay.map((auto) => (
                    <Card key={auto.id} auto={auto} handleLike={handleLike} />
                ))}
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
};

export default Home;
