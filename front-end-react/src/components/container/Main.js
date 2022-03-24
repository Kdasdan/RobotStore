import React from 'react';
import ButtonChoise from './ButtonChoise';
import Container from './robots/Container';

import { Box, useMediaQuery } from '@mui/material';

const Main = () => {
  return (


    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 10px 80px 10px' }}>
      <ButtonChoise />
      <Container />
    </Box >

  );
};

export default Main;