import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LoginIcon from '@mui/icons-material/Login';
import FaceIcon from '@mui/icons-material/Face';
import {authenticateSellerSignup} from '../service/api';
// import { Formik, Field, Form } from 'formik'

// const theme = createTheme();

const initializeValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
}


export default function SellSignup() {
    
    const [signup, setSignup] = useState('');
    const paperStyle = { padding: 20, height: '80vh', width: 400, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#504d4f' }
    const btnstyle = { margin: '20px 0', }

    const onValueChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }
    
    const signupUser=async()=>{
        let response= await authenticateSellerSignup(signup);
        console.log(signup);
        // handleClose();
        // if(!response) return console.log("response not found");
        // setAccount(signup.username)
        console.log(`${signup.name} has registered`);
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><FaceIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>

                <TextField
                    onChange={(e) => onValueChange(e)}
                    id="input-with-sx"
                    name="fullname"
                    label="Name"
                    variant="standard"
                    required
                    fullWidth
                    // margin="normal"
                    autoComplete="name"
                    autoFocus
                    // style={{ width: "100%", marginTop: "20px" }}
                    />

                <TextField
                    onChange={(e) => onValueChange(e)}
                    id="input-with-sx"
                    name="phone"
                    label="Phone"
                    variant="standard"
                    required
                    fullWidth
                    // margin="normal"
                    autoComplete="phoneNumber"
                    autoFocus
                    // style={{ width: "100%", marginTop: "20px" }}
                    />

                <TextField
                    onChange={(e) => onValueChange(e)}
                    id="input-with-sx"
                    name="email"
                    label="Email"
                    variant="standard"
                    required
                    fullWidth
                    // margin="normal"
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
                    // margin="normal"
                    autoComplete="password"
                    autoFocus
                    // style={{ width: "100%", marginTop: "20px" }}
                    />

                <TextField
                    onChange={(e) => onValueChange(e)}
                    id="input-with-sx"
                    name="Confirm password"
                    label="Confirm Password"
                    type="password"
                    variant="standard"
                    required
                    fullWidth
                    // margin="normal"
                    autoComplete="Confirm password"
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
                    onClick={() => signupUser()}
                    > 
                    <Typography style={{ marginRight: 5 }}> Sign Up</Typography>
                    <LoginIcon />
                </Button>
                {/* <Typography style={{marginTop: "20px"}}>
                    <Link href="#" >
                    Forgot password ?
                    </Link>
                </Typography> */}
                <Typography style={{ marginTop: "20px" }} > Already have an account ?
                    <Link to="/seller" >
                        Sign in
                    </Link>
                </Typography>
            </Paper>
        </Grid>



);
}

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//         email: data.get('email'),
//         password: data.get('password'),
//     });
// };

// return (
//     <ThemeProvider theme={theme}>
//         <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//                 sx={{
//                     marginTop: 8,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Avatar sx={{ m: 1, }}>
//                     <AdminPanelSettingsIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign Up
//                 </Typography>
//                 <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//                     {/* <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         id="outlined-required"
//                         label="Email Address"
//                         name="email"
//                         autoComplete="email"
//                         variant="outlined"
//                     //   autoFocus
//                     /> */}

//                     <TextField
//                         // onChange={(e) => onValueChange(e)}
//                         id="input-with-sx"
//                         name="name"
//                         label="Name"
//                         variant="standard"
//                         required
//                         fullWidth
//                         margin="normal"
//                         autoComplete="name"
//                         autoFocus
//                     // style={{ width: "100%", marginTop: "20px" }}
//                     />


//                     <TextField
//                         // onChange={(e) => onValueChange(e)}
//                         id="input-with-sx"
//                         name="email"
//                         label="Email"
//                         variant="standard"
//                         required
//                         fullWidth
//                         margin="normal"
//                         autoComplete="email"
//                         autoFocus
//                     // style={{ width: "100%", marginTop: "20px" }}
//                     />


//                     {/* <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         name="password"
//                         label="Password"
//                         type="password"
//                         id="outlined-password-input"
//                         autoComplete="current-password"
//                     /> */}


//                     <TextField
//                         // onChange={(e) => onValueChange(e)}
//                         id="input-with-sx"
//                         name="password"
//                         label="Password"
//                         type="password"
//                         variant="standard"
//                         required
//                         fullWidth
//                         margin="normal"
//                         autoComplete="email"
//                         autoFocus
//                     // style={{ width: "100%", marginTop: "20px" }}
//                     />


//                     {/* <FormControlLabel
//           control={<Checkbox value="remember" color="primary" />}
//           label="Remember me"
//         /> */}
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 3, mb: 2 }}
//                     >
//                         Sign Up
//                     </Button>
//                     <Grid container justifyContent="flex-end">
//                         {/* <Grid item xs>
//                             <Link href="#" variant="body2">
//                                 Forgot password?
//                             </Link>
//                         </Grid> */}
//                         <Grid item >
//                             <Link to="/seller" variant="body2">
//                                 {"Already have an account? Sign in"}
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//             {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//         </Container>
//     </ThemeProvider>