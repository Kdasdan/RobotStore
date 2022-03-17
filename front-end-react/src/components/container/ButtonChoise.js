import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';



const ButtonChoise = () => {
  let navigate = useNavigate();
  const [select, setSelect] = useState(false);

  const ButtonShowAndAdd = () => {
    if (sessionStorage["level"] == 1) {
      return (
        <Box sx={{ display: 'flex' }}>
          <Button disabled={!select} sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { setSelect(!select); navigate("/") }}>Show</Button>
          <Button disabled={select} sx={{ padding: '10px', margin: '15px', width: '150px' }} variant="contained" onClick={() => { setSelect(!select); navigate("/add-robot") }}>Add</Button>
        </Box>
      );
    }
    return <></>;
  }



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px 0px' }}>
      <ButtonShowAndAdd />

      <Input placeholder="Search robot.." id="SearchRobot" sx={{ width: '300px' }} />
    </Box>
  );
};

export default ButtonChoise;