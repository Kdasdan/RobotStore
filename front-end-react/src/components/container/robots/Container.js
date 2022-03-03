import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <Box sx={{ flex: 1, backgroundColor: 'whitesmoke', display: 'flex', borderRadius: '3px', boxShadow: '0px 2px 16px rgba(0 0 0 /40%)' }}>
      <Outlet />
    </Box>
  );
};

export default Container;