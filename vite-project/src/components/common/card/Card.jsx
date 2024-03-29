import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ShareOutlined, Twitter, Instagram, FacebookOutlined } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../../auth/context/AuthContext';
import { ReservaContext } from '../../../context/ReservaContext';
import axios from 'axios';

const Card = ({ auto }) => {
  const [openModal, setOpenModal] = useState(false);
  const { addReserva } = useContext(ReservaContext);
  const [isFavorito, setIsFavorito] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      setIsFavorito(favorites.includes(auto.id));
    }
  }, []);

  const handleLike = () => {
    const updatedAuto = {
      usuarioId: user?.id,
      autoId: auto.id
    };

    axios.post('http://localhost:8080/favoritos/agregar-auto', updatedAuto)
      .then(() => {
        console.log('Auto actualizado con éxito');
        setIsFavorito(true);
        updateLocalStorage(auto.id, true);
      })
      .catch((error) => {
        console.error('Error al actualizar auto:', error);
      });
  };

  const eliminarFavorito = () => {
    const deleteAuto = {
      usuarioId: user?.id,
      autoId: auto.id
    };

    axios.delete('http://localhost:8080/favoritos/eliminar-auto', { data: deleteAuto })
      .then(() => {
        console.log('Auto eliminado de favoritos con éxito');
        setIsFavorito(false);
        updateLocalStorage(auto.id, false);
      })
      .catch((error) => {
        console.error('Error al eliminar auto de favoritos:', error);
      });
  };

  const updateLocalStorage = (autoId, isFav) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = isFav ? [...storedFavorites, autoId] : storedFavorites.filter(id => id !== autoId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const shareOnTwitter = () => { };
  const shareOnInstagram = () => { };
  const shareOnFacebook = () => { };

  const handleShareButtonClicked = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleReserva = () => {
    addReserva(auto);
  };

  return (
    <MuiCard
      sx={{
        width: 400,
        height: auto,
        backgroundColor: 'white',
        border: '1px solid #FFA775',
      }}>
      <CardHeader
        title={auto.modelo}
        subheader={auto.categoria}
        sx={{ color: 'black' }}
      />
      <Link to={`/detalle/${auto.id}`}>
        <CardMedia
          component='img'
          height='220'
          image={auto.imgUrl}
          alt={auto.modelo}
        />
      </Link>
      {!!user && <Link to={`/detalle/${auto.id}`}>Reservar</Link>}

      <CardContent sx={{ width: 400, height: 130 }}>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ color: 'black' }}>
          Cantidad de puertas: {auto.puertas}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ color: 'black' }}>
          Maletas: {auto.valijas}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ color: 'black' }}>
          Capacidad: {auto.personas}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ color: 'black' }}>
          Precio: {auto.precio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          onClick={() => {
            if (isFavorito) {
              eliminarFavorito();
            } else {
              handleLike();
            }
          }}>
          <FavoriteIcon color={isFavorito ? 'warning' : 'disabled'} />
        </IconButton>
        <IconButton onClick={handleShareButtonClicked}>
          <ShareOutlined />
        </IconButton>
        <Stack spacing={1}>
          <Rating
            name='half-rating-read'
            defaultValue={2.5}
            precision={0.5}
          />
        </Stack>
      </CardActions>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}>
        <DialogTitle>Compartir en redes sociales</DialogTitle>
        <DialogContent
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <DialogContentText>
            Selecciona una red social para compartir:
          </DialogContentText>
          <IconButton onClick={shareOnTwitter}>
            <Twitter />
          </IconButton>
          <IconButton onClick={shareOnInstagram}>
            <Instagram />
          </IconButton>
          <IconButton onClick={shareOnFacebook}>
            <FacebookOutlined />
          </IconButton>
        </DialogContent>
        <DialogActions>
          <button onClick={handleCloseModal}>Cerrar</button>
        </DialogActions>
      </Dialog>
    </MuiCard>
  )
}

export default Card;
