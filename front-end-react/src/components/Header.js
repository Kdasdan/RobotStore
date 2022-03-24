import React from 'react';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <>
      <Typography id="titleHeader" align='center' variant="h3" component="p" color="dark" mt={9}>
        Robot Store
      </Typography>
      <Typography id="sloganHeader" align='center' variant="h4" component="p" color='dark'>
        CRUD for Robot Store's inventory
      </Typography>
    </>
  );
};

export default Header;