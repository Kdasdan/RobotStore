import React from 'react';
import {
  Box,
  Input,
  Button
} from '@mui/material';

const Clear = () => {
  document.getElementById("RobotName").value = "";
  document.getElementById("RobotPrice").value = "";
}

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

        <Input placeholder="Name" id="RobotName" />
        <Input placeholder="Price" id="RobotPrice" type="number" />

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button variant="contained" size="large" sx={{ width: '20%' }}>ADD</Button>
          <Button onClick={Clear} variant="contained" size="large" color="warning" sx={{ width: '20%', marginLeft: '20px' }}>CLEAR</Button>
        </div>
      </div>
    </Box>
  );
};

export default AddRobot;