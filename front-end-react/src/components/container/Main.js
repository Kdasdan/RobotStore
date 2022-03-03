import { Box } from '@mui/material';
import ButtonChoise from './ButtonChoise';
import Container from './robots/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0px 400px 80px 400px' }}>
      <ButtonChoise />
      <Container />
    </Box>
  );
};

export default Main;