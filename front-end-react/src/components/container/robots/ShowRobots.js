import { Box } from '@mui/material';
import React from 'react';
import Robot from './Robot';




const ShowRobots = () => {

  let items = [];
  for (let index = 0; index < 10; index++) {
    items.push(<Robot />)
  }

  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          padding: '15px',
          position: 'absolute',
          height: '100%',
          width: '100%',
          overflow: 'auto',
        }}
      >

        <Box
          sx={{
            padding: '5px',
            borderRadius: '3px',
            backgroundColor: 'white',
            boxShadow: '0px 2px 16px rgba(0 0 0 /30%)',
            marginBottom: '10px',
            position: 'relative'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}>
            <h3>ID</h3>
            <h3>NAME</h3>
            <h3>PRICE</h3>
          </div>
        </Box>
        {/* ICI  ROBOT */}
        {items}
      </Box>
    </Box>
  );
};

export default ShowRobots;