import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Box, Button, Input } from '@mui/material';

const EditRobot = () => {

  const navigate = useNavigate();

  const params = useParams();

  const [nameRobot, setName] = useState("");
  const [priceRobot, setPrice] = useState(0);

  useEffect(() => {
    axios.get(`https://robotstore.azurewebsites.net/api/Robot/${params.id}`)
      .then((res) => {
        setName(res.data["name"]);
        setPrice(res.data["price"]);
      });
  }, []);

  const Clear = () => {
    document.getElementById("RobotName").value = "";
    document.getElementById("RobotPrice").value = "";
  }

  const EditARobot = () => {
    let _name = document.getElementById("RobotName").value;
    let _price = parseInt(document.getElementById("RobotPrice").value);
    axios.put(
      `https://robotstore.azurewebsites.net/api/Robot/${params.id}`,
      { id: params.id, name: _name, price: _price },
      { headers: { 'Content-Type': 'application/json' } }
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

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

        <Input placeholder={`Name : ${nameRobot}`} id="RobotName" />
        <Input placeholder={`Price : ${priceRobot}`} id="RobotPrice" />
        <div style={{ color: 'green', visibility: 'hidden' }} id="messageAdd">
          <p>The robot has been edited !</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button onClick={() => { EditARobot(); navigate("/"); }} variant="contained" size="large" sx={{ width: '20%' }} className="btnChoise">EDIT</Button>
          <Button onClick={Clear} variant="contained" size="large" color="warning" sx={{ width: '20%', marginLeft: '20px' }} className="btnChoise">CLEAR</Button>
          <Button onClick={() => navigate("/")} variant="contained" color="error" size="large" sx={{ marginLeft: '20px', width: '20%' }} className="btnChoise">CANCEL</Button>
        </div>
      </div>
    </Box >
  );
};

export default EditRobot;