import React from 'react';
import { useEffect, useState } from 'react';
import Robot from './Robot';
import axios from 'axios';
import { Box } from '@mui/material';

const ShowRobots = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://robotstore.azurewebsites.net/api/Robot")
      .then((res) => {
        for (let index = 0; index < res.data.length; index++) {
          setData(data => [...data, <Robot key={index} id={res.data[index]["id"]} name={res.data[index]["name"]} price={res.data[index]["price"]} />]);
        }
      });
  }, []);

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
            <div style={{ flex: 1 }}>
              <h3 style={{ textAlign: 'center' }}>ID</h3>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ textAlign: 'center' }}>NAME</h3>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ textAlign: 'center' }}>PRICE</h3>
            </div>
          </div>
        </Box>
        {/* HERE ROBOT */}
        {data}
      </Box>
    </Box>
  );
};

export default ShowRobots;