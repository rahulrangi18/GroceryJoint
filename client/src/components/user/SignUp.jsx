import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button, InputBase, InputAdornment, Divider } from '@material-ui/core';
// import InputAdornment from '@mui/material/InputAdornment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import ClearIcon from '@mui/icons-material/Clear';
import {authenticateSignup} from '../../service/api'

const useStyles = makeStyles((theme) => ({
    component: {
        height: "82vh",
        width: "65vh",
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
        cursor: "pointer",
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
}))

export default function SignUp({ open, setOpen, toggleSignAccount }) {
    const classes = useStyles();

    const [signup, setSignup] = useState('');
    // {console.log("signup page")}
    const handleClose = () => {
        setOpen(false);
    }
    const onValueChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const signupUser=async()=>{
        let response= await authenticateSignup(signup);
        handleClose();
        if(!response) return console.log("response not found");
        // setAccount(signup.username)
       }
    

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box className={classes.login}>
                    <Box className={classes.logHeader} >
                        <Typography style={{ fontSize: "25px"}} >SignUp</Typography>
                        <ClearIcon onClick={()=>handleClose()} className={classes.clearIcon} />
                    </Box>
                    {/* <TextField onChange={(e) => onValueChange(e)} name='phone' label='Phone number' InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                    }} /> */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:"10px",flexDirection: 'column'}}>
                        {/* <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                        <TextField onChange={(e)=>onValueChange(e)} id="input-with-sx" name='fullname' label="Full Name" variant="standard" style={{width: '100%',}}/>
                        <TextField onChange={(e)=>onValueChange(e)} id="input-with-sx" name='email' label="Email" variant="standard" style={{width: '100%',marginTop: "20px"}}/>
                        <TextField onChange={(e)=>onValueChange(e)} id="input-with-sx" name='password' label="Password" variant="standard" style={{width: '100%',marginTop: "20px"}}/>
                        <TextField onChange={(e)=>onValueChange(e)} id="input-with-sx" name='phone' label="Phone Number" variant="standard" style={{width: '100%',marginTop: "20px"}}/>
                    </Box>
                    {/* <Box boxShadow={2} className={classes.search}>
                        <div className={classes.searchIcon}>
                            <LocationOnIcon />
                        </div>
                        <InputBase
                            placeholder="Location"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            style={{ width: "80%" }}
                            inputProps={{ "aria-label": "phone" }}
                        />
                        <h1 style={mystyle}>|</h1>
                        <Divider orientation="vertical" flexItem />
                        <SearchBar />
                    </Box> */}
                    {/* <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' /> */}
                    <Button className={classes.btnSend}  variant='contained' color="primary" onClick={()=>signupUser()} >Create Account</Button>
                    {/* <Divider>OR</Divider> */}
                    <Typography style={{ textAlign: 'center', marginTop: "20px"}} >or</Typography>
                    {/* <Button className={classes.btnEmail}variant='contained' color="primary" startIcon={<EmailIcon/>} >Continue with Email</Button> */}
                    <Button className={classes.btnEmail} variant='contained' color="primary" startIcon={<GoogleIcon/>} >Continue with Google</Button>
                    <Divider style={{borderTop: "1px solid #000", marginTop: "20px"}} />
                    <Typography className={classes.createAccount} onClick={()=>toggleSignAccount()}  >Already Have an account? <span style={{color:"red"}} > Log in</span></Typography>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
