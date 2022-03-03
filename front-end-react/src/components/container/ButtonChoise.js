import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const ButtonChoise = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '50px 0px' }}>
      <Link to="/"><Button sx={{ padding: '10px', margin: '15px', minWidth: '100px' }} variant="contained">Show</Button></Link>
      <Link to="/add-robot"><Button sx={{ padding: '10px', margin: '15px', minWidth: '100px' }} variant="contained">Add</Button></Link>
    </Box>
  );
};

export default ButtonChoise;