import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Box, Button } from '@mui/material';

const ButtonChoise = () => {

  let navigate = useNavigate();
  const [select, setSelect] = useState(false);

  const ButtonShowAndAdd = () => {
    if (sessionStorage["level"] == 1) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { navigate("/") }}>Show</Button>
          <Button sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { navigate("/add-robot") }}>Add</Button>
          <Button variant="contained" size="large" sx={{ padding: '10px', margin: '15px', width: '150px' }} onClick={() => { navigate("/search-robot") }}>SEARCH</Button>
        </Box>
      );
    }
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Button disabled={!select} sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { setSelect(!select); navigate("/") }}>Show</Button>
        <Button disabled={select} variant="contained" size="large" sx={{ padding: '10px', margin: '15px', width: '150px' }} onClick={() => { setSelect(!select); navigate("/search-robot") }}>SEARCH</Button>
      </Box >
    );
  }



  return (
    <ButtonShowAndAdd />
  );
};

export default ButtonChoise;