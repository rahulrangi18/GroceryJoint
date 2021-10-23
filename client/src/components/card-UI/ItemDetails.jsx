import React, { useState } from 'react'
import { Box, Typography, makeStyles, Divider, Button } from '@material-ui/core';
import Badge from './Badge';
import Navbar from '../header/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDetails from '../card-UI/CartDetails'
// import SendIcon from '@mui/icons-material/Send';
const useStyles = makeStyles({
    container: {
        display: 'flex',
        padding: 10,
        // margin: 10,
        marginLeft:"10%",
        marginRight:"10%",
    },
    leftContainer: {
        width: "30%",
    },
    rightContainer: {
        padding: 15,
        marginLeft: "5%",
    },
    count: {
        display: 'flex',
    },
    btncart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
function CardDetails() {
    const classes = useStyles();
    const [count, SetCount] = useState(0);
    const [open, setOpen] = useState(false);
    const imgsrc = "https://rukminim1.flixcart.com/image/280/180/jaij3bk0/milk/d/u/c/1-tetrapack-homogenized-amul-original-imafy2q4reda3v5z.jpeg?q=70";

    const openCartDialog = () => {
        setOpen(true);
    }


    // let count = 1;
    const AddToCard = () => {
        SetCount(count => count + 1);
    }
    const removeFromCard = () => {
        SetCount(count => count - 1);
    }

    return (
        <>
            <Navbar count={count} />

            <Box className={classes.container}>
                <Box className={classes.leftContainer} >
                    <img style={{ marginLeft: "30%", marginTop: "20px", marginBottom: "20px" }} src={imgsrc} />
                    <Box className={classes.count} >

                        {count >= 1 ?
                            <Box style={{display: "flex"}}>
                                <Button className={classes.btncart} color="primary" variant="contained" startIcon={<ShoppingCartIcon />} onClick={()=>openCartDialog()} > Go TO CARD</Button>
                                <Button  variant='contained' style={{marginLeft:20}} onClick={AddToCard} >+</Button>

                            </Box>
                            :
                            <Button className={classes.btncart} onClick={AddToCard} color="primary" variant="contained" startIcon={<ShoppingCartIcon />}>ADD TO CARD</Button>


                        }
                        {count >= 1 &&
                            <Typography style={{ fontSize: 24, fontWeight: 700, color: "#666", marginLeft: 10, marginRight: 10 }}>{count}</Typography>}
                        {count >= 1 && <Button variant='contained' onClick={removeFromCard}>-</Button>}
                    
                    </Box>
                      {/* <Box className={classes.count} >
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>

                    </Box> */}
                    <Divider />
                </Box>
                <Box className={classes.rightContainer}>
                    <Typography style={{ fontSize: 18, fontWeight: 700 }}>Amul Gold</Typography>
                    <Typography style={{ fontSize: 15, fontWeight: 400, color: "#666" }}>More By&nbsp;<span style={{ color: "orange", cursor: "pointer" }}>Amul</span></Typography>

                    <Typography style={{ fontSize: 15, fontWeight: 500 }}>Products MRP:&nbsp;<span style={{ fontSize: 24, fontWeight: 700 }}>₹60.00</span></Typography>

                    <Typography style={{ fontSize: 10, fontWeight: 300, color: "#666", marginBottom: 20 }}>( inclusive of all the taxes)</Typography>
                    <Typography style={{ fontSize: 18, fontWeight: "bold", marginLeft: "10px" }}>Product Details</Typography>
                </Box>
                <CartDetails item={count}  open={open} setOpen={setOpen} />
            </Box>
        </>
    )
}

export default CardDetails
