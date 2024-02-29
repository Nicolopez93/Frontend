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

const Card = ({ auto, handelLike }) => {
  return (
    <MuiCard sx={{ width: 300 , height: 500 ,backgroundColor: 'white'}}>
      <CardHeader 
        title={auto.nombre}
        subheader={auto.categoria}
        sx={{color : 'black'}}
      />
      <Link to={`/detalle/${auto.id}`}>
        <CardMedia
          component="img"
          height="194"
          image={auto.imgUrl}
          alt={auto.nombre}
        />
      </Link>
      <CardContent sx={{ width: 300 , height: 130 }}>
        <Typography variant="body2" color="text.secondary" sx={{color : 'black'}}>
          {auto.puertas}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color : 'black'}}>
          {auto.valijas}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color : 'black'}}>
          {auto.personas}
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{color : 'black'}}>
          {auto.precio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => handelLike(auto)}>
          <FavoriteIcon color={auto.isLiked ? "error" : "disabled"} />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
