import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { Button, Input } from '@mui/material';
import { useNavigate } from 'react-router';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditRobot = () => {

  const navigate = useNavigate();


  const params = useParams();
  console.log(params);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        setName(res.data["name"]);
        setPrice(res.data["id"]);
      });
  }, []);

  const Clear = () => {
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

        <Input placeholder={`Name : ${name}`} id="RobotName" />
        <Input placeholder={`Price : ${price}`} id="RobotPrice" />

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button variant="contained" size="large" sx={{ width: '20%' }}>EDIT</Button>
          <Button onClick={Clear} variant="contained" size="large" color="warning" sx={{ width: '20%', marginLeft: '20px' }}>CLEAR</Button>
          <Button onClick={() => navigate("/")} variant="contained" color="error" size="large" sx={{ marginLeft: '20px', width: '20%' }}>CANCEL</Button>
        </div>
      </div>
    </Box>
  );
};

export default EditRobot;