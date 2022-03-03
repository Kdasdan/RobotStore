import React from 'react';

// MUI
import { Box } from '@mui/material';

// Components
import Header from '../components/Header';
import Main from '../components/container/Main';

const Home = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'whitesmoke'
      }}
    >
      <Header />
      <Main />
    </Box>
  );
};

export default Home;