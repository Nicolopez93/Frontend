import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './tipoDeAuto.css';

const TipoDeAuto = () => {
    

    return (
        <>
        <div className='tipoDeAuto-container'>
            <h2 className='tipoDeAuto-titulo'>Busca por tipo de Vehículo</h2>
            <div className='tipoDeAuto-card-container'>
                <Link to="/flotaDeAutos" className='tipoDeAuto-card-link'>
                    <Card className='tipoDeAuto-card'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://garagem360.com.br/wp-content/uploads/2022/10/img-version-cronos-precision-13-at-2048x1306.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Elegi tu Auto
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    En nuestro catálogo, encontrarás una amplia selección de autos, cada uno diseñado para brindarte la máxima comodidad y seguridad en tus aventuras por carretera.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/flotaDeCamioneta" className='tipoDeAuto-card-link'>
                    <Card className='tipoDeAuto-card'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://www.pngall.com/wp-content/uploads/5/Ford-Pickup-Truck.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Elegi tu Camioneta
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    En nuestro catálogo, encontrarás una amplia selección de camionetas, cada uno diseñado para brindarte la máxima comodidad y seguridad en tus aventuras por carretera.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        </div>
        </>
    );
};

export default TipoDeAuto;
