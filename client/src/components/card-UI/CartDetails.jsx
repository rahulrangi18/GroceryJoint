import React, { useState } from 'react'
import { Box, makeStyles, Typography, Dialog, DialogContent, ButtonGroup, Button, Divider } from "@material-ui/core";
import Navbar from '../header/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const useStyles = makeStyles((theme) => ({
    component: {
        // maxWidth:"850px",
        height: "70vh",
        width: "80vh",
    },
    container: {
        padding: 20,
        display: "flex",
        flexDirection: "row",

    },
    itemItem: {
        fontSize: "16px",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-evenly",

    },
    text: {
        marginRight: "60px"
    },
    button: {
        marginLeft: "140px",
        marginTop: "20px"
        // padding: "25px",
    },
    divider: {
        background: theme.palette.divider,
    },
    Bmbutton: {
        display: "flex",
        // flexDirection: "flex-end",
        justifyContent: "flex-end",
        position:"absolute",
        // marginBottom:0,
        bottom: 10,
        marginLeft: 5,
        width: "90%",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    }
}))
export default function CartDetails({ open, setOpen }) {
    const [count, setCount] = useState(1);
    const imgsrc = "https://rukminim1.flixcart.com/image/280/180/jaij3bk0/milk/d/u/c/1-tetrapack-homogenized-amul-original-imafy2q4reda3v5z.jpeg?q=70";
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    }

    const increment = () => {
        setCount(count => count + 1);
    }
    const decrement = () => {
        setCount(count => count - 1);
    }
    return (
        <>
            {/* <Navbar/> */}
            <Dialog open={open} onClose={handleClose}>
                <DialogContent className={classes.component} >
                    <Typography style={{ fontWeight: "600", marginLeft: "10px" }} >My Cart</Typography>
                    <Divider classes={{ root: classes.divider }} />
                    <Box className={classes.main} >
                        <Box className={classes.container} >

                            <img src={imgsrc} style={{ height: 100 }} />
                            <Box className={classes.itemItem} >
                                <Box className={classes.text} >
                                    <Typography style={{ fontWeight: "500" }} >AMUL Milk</Typography>
                                    <Typography style={{ fontWeight: "300", fontSize: "12px", color: "#666" }} >1 Ltr.</Typography>
                                    <Typography style={{ fontSize: 18, fontWeight: 600, marginTop: "20px" }}>₹60.00</Typography>

                                </Box>
                                <Box className={classes.button} >
                                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                                        <Button disabled={count === 1} onClick={() => decrement()}>-</Button>
                                        <Button>{count}</Button>
                                        <Button onClick={() => increment()} >+</Button>
                                    </ButtonGroup>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.Bmbutton}>

                            <Button variant="contained" color="primary" fullWidth={true} startIcon={<ShoppingCartIcon />} >Place Order</Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}
