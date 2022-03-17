import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



const ButtonChoise = () => {

  let navigate = useNavigate();
  const [select, setSelect] = useState(false);
  const [number, setNumber] = useState(0);

  const ButtonShowAndAdd = () => {
    if (sessionStorage["level"] == 1) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button disabled={number == 0 ? true : false} sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { setNumber(0); navigate("/") }}>Show</Button>
          <Button disabled={number == 1 ? true : false} sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { setNumber(1); navigate("/add-robot") }}>Add</Button>
          <Button disabled={number == 2 ? true : false} variant="contained" size="large" sx={{ padding: '10px', margin: '15px', width: '150px' }} onClick={() => { setNumber(2); navigate("/search-robot") }}>SEARCH</Button>
        </Box>
      );
    }
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Button disabled={select} sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { setSelect(!select); navigate("/") }}>Show</Button>
        <Button disabled={!select} variant="contained" size="large" sx={{ padding: '10px', margin: '15px', width: '150px' }} onClick={() => { setSelect(!select); navigate("/search-robot") }}>SEARCH</Button>
      </Box >
    );
  }



  return (
    <ButtonShowAndAdd />
  );
};

export default ButtonChoise;