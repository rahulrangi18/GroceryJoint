import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button, InputBase, InputAdornment, Divider } from '@material-ui/core';
import {Link} from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import ClearIcon from '@mui/icons-material/Clear';
import {authenticateLogin} from '../../service/api';
const useStyles = makeStyles((theme) => ({
    component: {
        height: "80vh",
        width: "64vh",
    },
    login: {
        padding: "15px 25px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        // justifyContent:"space-between",
    },
    search: {
        margin: "0 7% 0 auto",
        borderRadius: 10,
        backgroundColor: "#fff",
        width: "50%",
        marginLeft: 10,
        display: "flex",
        color: "black",
        margin: 15,
        height: 40,
        boxShadow: "0px 13px 10px -7px rgba(0,0,0,0.1)",
    },
    searchIcon: {
        padding: theme.spacing(2, 2),
        height: "100%",
        position: "relative",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: 5,
    },
    logHeader: {
        display: "flex",
    },
    clearIcon:{
        marginLeft:"auto",
        marginTop:"8px",
        fontSize:"large",
        cursor:"pointer",
    },
    createAccount: {
        textAlign: 'center', 
        marginTop: "10px", 
        marginBottom: "10px", 
        display: "flex",
        justifyContent: "flex-start",
        fontSize: "14px",
        cursor:"pointer"

    },
    btnSend: {
        marginTop: "20px",
        padding:10,
        background:"tomato",
        textDecoration:"none",
    },
    btnEmail: {
        marginTop: "20px",
        padding:10,
        background:"transparent",
        textDecoration:"none",
        color:"black",
    },
    error:{
        fontSize:10,
        color:"#ff6161",
        marginTop:0,
    },
}))
const loginInitialValues = {
    email:'',
    password:'',
    fullname:''
}
export default function Login({ open, setOpen, toggleLogAccount, setAccount }) {
    const classes = useStyles();
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    useEffect(()=>{
        setError(false);
    },[login])
    const handleClose = () => {
        setOpen(false);
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});
        // console.log(login);
    }
    const loginUser = async() => {
        const response = await authenticateLogin(login);
        if(!response) return setError(true);
        else{
            setError(false);
            handleClose();
            setAccount(login.email)
        }
    }
    const responseSuccessGoogle=(response)=>{
        console.log("Google Sign in was successful,here is your response");
        console.log(response);
        axios({
          method: "POST",
          url: "http://localhost:5000/api/googlelogin",
          data: { tokenId: response.tokenId },
        }).then((response) => {
          console.log(response);
        })
    }
     const responseErrorGoogle = (error) => {
        console.log(error);
        console.log('Google Sign in was unsuccessful');
     };
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.component}>
          <Box className={classes.login}>
            <Box className={classes.logHeader}>
              <Typography style={{ fontSize: "25px" }}>Login</Typography>
              <ClearIcon
                onClick={() => handleClose()}
                className={classes.clearIcon}
              />
            </Box>
            {/* <TextField onChange={(e) => onValueChange(e)} name='phone' label='Phone number' InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    }} /> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: "10px",
                flexDirection: "column",
              }}
            >
              {/* <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
              <TextField
                onChange={(e) => onValueChange(e)}
                id="input-with-sx"
                name="email"
                label="Email"
                variant="standard"
                style={{ width: "100%", marginTop: "20px" }}
              />
              <TextField
                onChange={(e) => onValueChange(e)}
                id="input-with-sx"
                name="password"
                label="Password"
                variant="standard"
                style={{ width: "100%", marginTop: "20px" }}
              />
              {error && (
                <Typography className={classes.error}>
                  Invalid username or password
                </Typography>
              )}
            </Box>
            <Button
              className={classes.btnSend}
              variant="contained"
              color="primary"
              onClick={() => loginUser()}
            >
              Log In
            </Button>
            {/* <Divider>OR</Divider> */}
            <Typography style={{ textAlign: "center", marginTop: "20px" }}>
              or
            </Typography>
            <GoogleLogin
              clientId="548736927785-l1s640me1mmgc2it65d583kbrb16ueg2.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className={classes.btnEmail}
                  variant="contained"
                  color="primary"
                  startIcon={<GoogleIcon />}
                >
                  Continue with Google
                </Button>
              )}
              onSuccess={responseSuccessGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={'single_host_origin'}
            />
            <Divider
              style={{ borderTop: "1px solid #000", marginTop: "20px" }}
            />
            <Typography
              className={classes.createAccount}
              onClick={() => toggleLogAccount()}
            >
              New To GroceryJoint?
              <span style={{ color: "red" }}> Create Account</span>
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    );
}
