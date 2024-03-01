import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../common/card/Card';
import styles from '../home/home.module.css';
import Navbar from '../../common/navbar/Navbar';
import Buscador from '../../common/buscador/Buscador';
import TipoDeAuto from '../../common/tipoDeAuto/TipoDeAuto';
import Recomendacion from '../../common/recomendacion/Recomendacion';

const Home = () => {
    const [autos, setAutos] = useState([]);
    const [dispatchLike, setDispatchLike] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/autos")
            .then(res => {
                setAutos(res.data);
            })
            .catch(err => console.log(err));
            setDispatchLike(false)
    }, [dispatchLike]);

    const handleLike = (auto) => {
        axios.patch(`http://localhost:5000/autos/${auto.id}`, { isLiked: !auto.isLiked })
            .then(res => setDispatchLike(true))
            .catch(err => console.log(err));
    };

    const handleSearch = (searchTerm) => {
        console.log(searchTerm);
        const filteredAutos = autos.filter((auto) =>
            auto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredAutos);
    };



    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <Buscador onSearch={handleSearch} />
            </div>
            <div className={styles.container}>
            <TipoDeAuto/>
            </div>
            <div>
            <Recomendacion/>
            </div>
            <div className={styles.containerCards}>
                {searchResults.length > 0
                    ? searchResults.map((auto) => (
                        <Card key={auto.id} auto={auto} handleLike={handleLike} />
                    ))
                    : autos.map((auto) => (
                        <Card key={auto.id} auto={auto} handleLike={handleLike} />
                    ))}
            </div>
        </>
    );
};

export default Home;
