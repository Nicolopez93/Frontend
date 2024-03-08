import { Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <>
    <div style={{backgroundColor: 'rgb(145, 192, 243,0.3)'}}>
    <Link to='/'> <button> Volver </button></Link>
    </div>
    <Grid
      container
      spacing={ 0 }
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'rgb(145, 192, 243,0.3)', padding: 4 }}
    >
      <img src="https://t-cf.bstatic.com/design-assets/assets/v3.109.3/illustrations-traveller/TripsCarRentalManageMyAccount.png" alt="pibeee" />
      
      <Grid item
       className='box-shadow'
       xs={ 3 }
       sx={{ 
            width: { sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
        }}>
          
          <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

            
            { children }

        </Grid>

    </Grid>
    </>
  )
}