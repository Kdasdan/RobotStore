import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { Button, Input } from '@mui/material';

import React from 'react';

const EditRobot = () => {

  const params = useParams();
  console.log(params);

  params.id = 5;

  const Clear = () => {
    document.getElementById("RobotId").value = "";
    document.getElementById("RobotName").value = "";
    document.getElementById("RobotPrice").value = "";
  }

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: 'whitesmoke',
        padding: '120px'
      }}>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <h1>EDIT ROBOT N°{params.id}</h1>

        <Input placeholder={params.id} id="RobotId" />
        <Input placeholder="Name" id="RobotName" />
        <Input placeholder="Price" id="RobotPrice" />

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button variant="contained" size="large" sx={{ width: '20%' }}>EDIT</Button>
          <Button onClick={Clear} variant="contained" size="large" color="warning" sx={{ width: '20%', marginLeft: '20px' }}>CLEAR</Button>
          <Button variant="contained" color="error" size="large" sx={{ marginLeft: '20px', width: '20%' }}>CANCEL</Button>
        </div>
      </div>
    </Box>
  );
};

export default EditRobot;