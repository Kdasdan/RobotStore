import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

const Robot = (props) => {

  const { id } = props;
  const { name } = props;
  const { price } = props;

  const navigate = useNavigate();

  const ButtonEditAndDelete = () => {
    if (sessionStorage["level"] == 1) {
      return (
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
      );
    }
    return <></>;
  }

  return (

    <>

      <div style={{
        position: 'relative',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '3px solid lightgray'
      }}>

        <div style={{ flex: 1 }}>
          <p style={{ textAlign: 'center' }}>{id}</p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ textAlign: 'center' }}>{name}</p>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ textAlign: 'center' }}>{price}</p>
        </div>

        <ButtonEditAndDelete />

      </div>
    </>
  );
};

export default Robot;