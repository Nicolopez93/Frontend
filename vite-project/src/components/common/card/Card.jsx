import React from 'react';
import { Link } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ auto, handleLike }) => {
  return (
    <MuiCard sx={{ width: 400 , height: 500 ,backgroundColor: 'white', border : '1px solid #FFA775'}}>
      <CardHeader 
        title={auto.marca + ' ' + auto.nombre}
        subheader={auto.categoria}
        sx={{color : 'black'}}
      />
      <Link to={`/detalle/${auto.id}`}>
        <CardMedia
          component="img"
          height="220"
          image={auto.imgUrl}
          alt={auto.nombre}
        />
      </Link>
      <CardContent sx={{ width: 300 , height: 130 }}>
        <Typography variant="body2" color="text.secondary" sx={{color : 'black'}}>
          Cantidad de puertas: {auto.puertas}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color : 'black'}}>
          Maletas: {auto.valijas}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color : 'black'}}>
          Capacidad: {auto.personas}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color : 'black'}}>
          Precio: {auto.precio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => handleLike(auto)}>
          <FavoriteIcon color={auto.isLiked ? "warning" : "disabled"}/>
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
