import React from 'react';
import Card from '../card/Card';

const Recomendacion = ({autos}) => {
  return (
   <div>
    <Card auto ={autos[0]}/>
    
    <Card auto ={autos[1]}/>
    </div>
  );
};

export default Recomendacion;
