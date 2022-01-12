import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LoginIcon from '@mui/icons-material/Login';
import FaceIcon from '@mui/icons-material/Face';


import {authenticateSellerLogin} from '../service/api';

const initializeValues = {
    email: "",
    password: "",
}

const SellLogin = () => {
    const [login, setLogin] = useState(initializeValues);
    
    const paperStyle = { padding: 20, height: '80vh', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#504d4f' }
    const btnstyle = { margin: '20px 0',  }
    
    
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});
        console.log(login);
    }
// function for login
    const LoginUser=async()=>{
        console.log(login);
        let response= await authenticateSellerLogin(login);
        // handleClose();
        // if(!response) return console.log("response not found");
        // setAccount(signup.username)
        console.log(`${login.email} has registered`);
    }



    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><FaceIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                < TextField
                    onChange={(e) => onValueChange(e)}
                    id="input-with-sx"
                    name="email"
                    label="Email"
                    variant="standard"
                    required
                    fullWidth
                    margin="normal"
                    autoComplete="email"
                    autoFocus
                // style={{ width: "100%", marginTop: "20px" }}
                />
                <TextField
                    onChange={(e) => onValueChange(e)}
                    id="input-with-sx"
                    name="password"
                    label="Password"
                    type="password"
                    variant="standard"
                    required
                    fullWidth
                    margin="normal"
                    autoComplete="email"
                    autoFocus
                // style={{ width: "100%", marginTop: "20px" }}
                />
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    onClick={() => LoginUser()}
                > 
                    <Typography style={{ marginRight:5}}> Sign in</Typography>
                    <LoginIcon/>
                </Button>
                <Typography style={{marginTop: "20px"}}>
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography style={{marginTop: "20px"}} > Do you have an account ?
                    <Link to="/sellerSign" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SellLogin

