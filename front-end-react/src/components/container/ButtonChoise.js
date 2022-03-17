import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



const ButtonChoise = () => {
  let navigate = useNavigate();
  const [select, setSelect] = useState(false)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '50px 0px' }}>
      <Button disabled={!select} sx={{ padding: '10px', margin: '15px', minWidth: '100px' }} variant="contained" onClick={() => { setSelect(!select); navigate("/") }}>Show</Button>
      <Button disabled={select} sx={{ padding: '10px', margin: '15px', minWidth: '100px' }} variant="contained" onClick={() => { setSelect(!select); navigate("/add-robot") }}>Add</Button>
    </Box>
  );
};

export default ButtonChoise;