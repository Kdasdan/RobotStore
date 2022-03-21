import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import Robot from './Robot';

import { Box, Input } from '@mui/material';

const SearchRobot = () => {

  const [data, setData] = useState([]);

  const SearchRobot = () => {
    let searchBar = document.getElementById("SearchRobot").value.toLowerCase();
    let i = 0;
    setData([]);


    if (searchBar != "") {

      axios.get(`https://localhost:7063/api/Robot`)
        .then((res) => {

          res.data.map(x => {
            if (x.name.indexOf(searchBar) == 0) {
              // console.log(x.name);
              setData(data => [...data, <Robot key={i} id={x.id} name={x.name} price={x.price} />]);
              i++
            }

          });
        });
    }
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
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Input placeholder="Search robot..." id="SearchRobot" sx={{ margin: '10px', width: '300px' }} onChange={(event) => { SearchRobot(event.target.value); }} />
        </div>
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
        {data}
      </Box>
    </Box>
  );
};

export default SearchRobot;