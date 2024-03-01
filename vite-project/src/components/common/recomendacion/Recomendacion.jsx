import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Recomendacion = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
    <Card sx={{ display: 'flex', width: 600, height: 300 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Audi
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Experimenta la verdadera definición de lujo y rendimiento con Audi
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          sx={{ width: 350, maxHeight: 300, objectFit: 'contain' }}
          image="http://pluspng.com/img-png/car-png-car-png-file-1766.png"
          alt="Auto"
        />
      </Box>
    </Card>
    <Card sx={{ display: 'flex', width: 600, height: 300 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          S10
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Brindarte la máxima comodidad y la experiencia de manejo por caminos de tierra.
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          sx={{ width: 350, maxHeight: 300, objectFit: 'contain' }}
          image="https://pluspng.com/img-png/pickup-hd-png-chevrolet-png-picture-89798-2154.png"
          alt="Auto"
        />
      </Box>
    </Card>
    </div>
  );
};

export default Recomendacion;
