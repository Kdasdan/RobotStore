import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';

const AddRobot = () => {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: 'whitesmoke',
        padding: '120px'
      }}
    >
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <h1>ADD A NEW ROBOT</h1>

        <TextField id="outlined-basic" label="ID" variant="outlined" size='large' />
        <TextField id="outlined-basic" label="Name" variant="outlined" size='large' />
        <TextField id="outlined-basic" label="Price" variant="outlined" size='large' />

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button variant="contained" size="large" sx={{ width: '20%' }}>ADD</Button>
          <Button variant="contained" size="large" color="warning" sx={{ width: '20%', marginLeft: '20px' }}>CLEAR</Button>
        </div>
      </div>


    </Box>
  );
};

export default AddRobot;