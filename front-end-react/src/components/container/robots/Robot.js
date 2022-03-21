import React from 'react';
import { useNavigate } from 'react-router';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Robot = (props) => {

  const { id } = props;
  const { name } = props;
  const { price } = props;

  const navigate = useNavigate();

  async function DeleteRobot() {
    try {
      await fetch(`https://localhost:7063/api/Robot/${id}`, { method: 'DELETE' });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }

  const ButtonEditAndDelete = () => {
    if (sessionStorage["level"] == 1) {
      return (
        <div style={{
          display: 'flex',
          position: 'absolute',
          right: '10px',
          top: '0px'
        }}>
          <IconButton aria-label="delete" color='primary' onClick={() => { navigate(`/edit-robot/${id}`) }}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color='error' onClick={DeleteRobot} >
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