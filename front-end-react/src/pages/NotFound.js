import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography id="titleHeader" align='center' variant="h3" component="p" color="dark" mt={1.5}>
        404
      </Typography>
      <Typography id="sloganHeader" align='center' variant="h4" component="p" color='dark'>
        PAGE NOT FOUND !
      </Typography>
      <Typography id="sloganHeader" align='center' variant="h5" component="p" color='dark'>
        RETURN TO <Link sx={{ textDecoration: 'underline' }} to="/">HOME</Link>
      </Typography>
    </Box>
  );
};

export default NotFound;