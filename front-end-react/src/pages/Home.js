import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

// MUI
import { Box, Button } from '@mui/material';

// Components
import Header from '../components/Header';
import Main from '../components/container/Main';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage["username"]) {
      navigate("/login");
    }
  });

  const Logout = () => {
    sessionStorage.removeItem("level");
    sessionStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        position: 'relative',
      }}
    >
      <Header />
      <div style={{
        position: 'absolute',
        top: '5px',
        left: '5px'
      }}>
        <h2 id="accountTitle">{`Account: ${sessionStorage["username"]}`}</h2>
        <Button id="btnLogout" onClick={Logout} color="error" variant="contained" size="medium" sx={{ width: '50%', margin: '5px' }}>LOGOUT</Button>
      </div>
      <Main />
    </Box>
  );
};

export default Home;