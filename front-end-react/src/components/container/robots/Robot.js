import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router';
import React from 'react';

const Robot = (params) => {

  const id = params.id

  const navigate = useNavigate();

  return (

    <>

      <div style={{
        position: 'relative',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '3px solid lightgray'
      }}>

        <p>1</p>
        <p>Robot</p>
        <p>15000€</p>

        <div style={{
          display: 'flex',
          position: 'absolute',
          right: '10px',
          top: '0px'
        }}>
          <IconButton aria-label="delete" color='primary'>
            <EditIcon onClick={() => { navigate(`/edit-robot/${id}`) }} />
          </IconButton>
          <IconButton aria-label="delete" color='error'>
            <DeleteIcon />
          </IconButton>
        </div>

      </div>
    </>
  );
};

export default Robot;