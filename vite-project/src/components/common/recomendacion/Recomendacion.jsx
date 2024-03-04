import React from 'react';
import Card from '../card/Card';

const Recomendacion = ({autos}) => {
  return (
   <div style={{backgroundColor: '#F77B33', display: 'flex', justifyContent: 'space-around'}}>
    <Card auto ={autos[0]}/>
    
    <Card auto ={autos[1]}/>
    </div>
  );
};

export default Recomendacion;
