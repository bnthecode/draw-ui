import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';


export default function LayoutTextFields() {
    const navigate = useNavigate();
const handleLogin = () => {


navigate('/gallery');
  
}



  return (
      <div style={{ width: '100vw', height: '100%'}}>
        
   <Paper elevation={16} style={
       {

        position: "absolute",
left: '50%',
top: '50%',
transform: 'translate(-50%, -50%)',
border: '5px solid black',
padding: '10px',
height: '25%',
width: '25%',
backgroundColor: '#eee',
display: 'flex', 
flexDirection: 'column',
textAlign: 'center'
       }}>
           <Typography style={{ color: 'black', fontFamily: 'cursive', fontSize: '46px'}}> you draw!</Typography>
     <TextField style={{ margin: '20px'}} label="username" id="margin-none" />
     <TextField style={{ margin: '20px'}} label="password" id="margin-none" />
     <Button style={{ margin: '20px'}} variant="contained" onClick={handleLogin}>Log in</Button>
</Paper>
    </div>
  );
}