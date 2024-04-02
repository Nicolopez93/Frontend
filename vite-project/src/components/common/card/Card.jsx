import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };
  
  const shareOnInstagram = () => {
    const url = `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };
  
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

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
    <div className="flex flex-row max-w-xs md:max-w-3xl mx-auto rounded-xl shadow-lg border border-gray-200 overflow-hidden h-96">
      <div className="w-2/3 bg-gray-200">
        <img src={auto.imgUrl} alt={auto.modelo} className="w-full h-auto object-cover" />
      </div>
      <div className="w-2/3 p-4">
        <div className="flex justify-between items-center">
          <Typography variant="h5" component="h2" className="text-lg font-bold text-black-800 bg-gray-200">{auto.modelo}</Typography>
          <IconButton
            aria-label="add to favorites"
            onClick={() => {
              if (isFavorito) {
                eliminarFavorito();
              } else {
                handleLike();
              }
            }}
          >
            <FavoriteIcon color={isFavorito ? 'warning' : 'disabled'} />
          </IconButton>
        </div>
        <Typography variant="body1" color="text.secondary" className="text-gray-600">{auto.marca}</Typography>
        <div className="mt-2">
          <Typography variant="body2" color="text.secondary" className="text-gray-600">Cantidad de puertas: {auto.puertas}</Typography>
          <Typography variant="body2" color="text.secondary" className="text-gray-600">Maletas: {auto.valijas}</Typography>
          <Typography variant="body2" color="text.secondary" className="text-gray-600">Capacidad: {auto.personas}</Typography>
          <div className="flex items-center">
            <Typography variant="h6" component="span" className="text-xl font-bold text-gray-800">${auto.precio}</Typography>
            <Typography variant="body2" color="text.secondary" className="ml-1 text-gray-600"> /día</Typography>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
          </Stack>
          <div>
            <IconButton onClick={handleShareButtonClicked}>
              <ShareOutlined />
            </IconButton>
            <Dialog open={openModal} onClose={handleCloseModal}>
              <DialogTitle>Compartir en redes sociales</DialogTitle>
              <DialogContent>
                <DialogContentText>Selecciona una red social para compartir:</DialogContentText>
                <div className="flex space-x-2">
                  <IconButton onClick={shareOnTwitter}>
                    <Twitter />
                  </IconButton>
                  <IconButton onClick={shareOnInstagram}>
                    <Instagram />
                  </IconButton>
                  <IconButton onClick={shareOnFacebook}>
                    <FacebookOutlined />
                  </IconButton>
                </div>
              </DialogContent>
              <DialogActions>
                <button onClick={handleCloseModal} className="border border-gray-300 rounded-md px-3 py-1">Cerrar</button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
