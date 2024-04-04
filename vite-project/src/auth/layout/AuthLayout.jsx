import { Grid, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <>
    <div className='bg-[#91c0f34d]'>
    <Link to='/'> <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto mb-4 sm:mb-8'> Volver </button></Link>
    
    <Grid
      container
      spacing={ 0 }
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '92vh', padding: 4 }}
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
    </div>
    </>
  )
}