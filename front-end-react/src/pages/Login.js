import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

// MUI
import { Box, Input, Button, Container } from '@mui/material';

const Login = () => {

  const navigate = useNavigate();
  const [visibility, setVisibility] = useState("hidden");

  const Login = () => {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json'
    }
    axios.get("https://robotstore.azurewebsites.net/api/Account", headers)
      .then((res) => {
        for (let index = 0; index < res.data.length; index++) {
          if (
            res.data[index]["username"] == document.getElementById("Username").value
            &&
            res.data[index]["password"] == document.getElementById("Password").value
          ) {
            sessionStorage.setItem("level", res.data[index]["level"]);
            sessionStorage.setItem("username", res.data[index]["username"]);
            navigate(`/`);
            return;
          }
          setVisibility("visible");
        }
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: 'whitesmoke',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Box
          sx={{
            padding: '5px',
            borderRadius: '3px',
            backgroundColor: 'white',
            boxShadow: '0px 2px 16px rgba(0 0 0 /30%)',
            marginBottom: '10px',
            position: 'relative',
            width: '800px',
            height: '200px'
          }}
        >
          <div style={{
            padding: '1px 100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
            <h1 id="loginTitle" style={{ textAlign: 'center' }}>Robot Store</h1>

            <Input placeholder="Username" id="Username" />
            <Input placeholder="Password" id="Password" type='password' />


            <div style={{ color: 'red', visibility: visibility }} id="LoginError">
              <p>Username or password is incorrect</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={Login} variant="contained" size="large" sx={{ width: '50%' }}>LOGIN</Button>
            </div>
          </div>
        </Box>

      </Box>
    </Container>
  );
};

export default Login;