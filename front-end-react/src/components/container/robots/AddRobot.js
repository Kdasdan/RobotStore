import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Box,
  Input,
  Button
} from '@mui/material';

const Clear = () => {
  document.getElementById("RobotName").value = "";
  document.getElementById("RobotPrice").value = "";
  document.getElementById("messageAdd").style.visibility = "hidden";
}

async function PostNewRobot() {

  try {
    await fetch('https://localhost:7063/api/Robot', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: document.getElementById("RobotName").value.toLowerCase(),
        price: document.getElementById("RobotPrice").value
      })
    });
    window.location.reload();
  } catch (e) {
    console.log(e);
  }
}

const AddRobot = () => {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState("hidden");

  const [verifyName, setVerifyName] = useState(true);
  const [verifyPrice, setVerifyPrice] = useState(true);

  const VerifyInputOne = (event) => {
    if (event.target.value != "") {
      setVerifyName(false);
    } else {
      setVerifyName(true);
    }
  }

  const VerifyInputTwo = (event) => {
    if (event.target.value != "") {
      setVerifyPrice(false);
    } else {
      setVerifyPrice(true);
    }
  }

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

        <Input placeholder="Name" id="RobotName" required onChange={VerifyInputOne} />
        <Input placeholder="Price" id="RobotPrice" type="number" required onChange={VerifyInputTwo} />
        <div style={{ color: 'green', visibility: visibility }} id="messageAdd">
          <p>The robot has been created !</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button disabled={verifyName || verifyPrice} onClick={() => { PostNewRobot(); navigate("/"); }} variant="contained" size="large" sx={{ width: '20%' }}>ADD</Button>
          <Button onClick={Clear} variant="contained" size="large" color="warning" sx={{ width: '20%', marginLeft: '20px' }}>CLEAR</Button>
        </div>
      </div>
    </Box>
  );
};

export default AddRobot;