import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './TipoDeAuto.css';

const TipoDeAuto = () => {
    

    return (
        <>
        <div className='busca-container'>
        <h2 style={{ textAlign: 'center' }}>Busca por tipos de Veiculos</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Link to="/flotaDeAutos">
          <Card sx={{ width: 300 , height: 400}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
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
        <Link to="/flotaDeCamioneta">
      <Card sx={{ width: 300 , height: 400}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
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
