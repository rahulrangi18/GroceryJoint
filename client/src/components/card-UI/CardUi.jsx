import * as React from 'react';
import { Card, Button, CardActions, CardContent, Typography, makeStyles, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        padding: 10,
        width: '40vh',
        height: '50vh',
    }
}))

const CardUi = () => {
    const classes = useStyles();
    const imgsrc = "https://rukminim1.flixcart.com/image/280/180/jaij3bk0/milk/d/u/c/1-tetrapack-homogenized-amul-original-imafy2q4reda3v5z.jpeg?q=70"
    return (
        <Card className={classes.card}>
            <CardContent>
                <img src={imgsrc} />
                <Typography >
                    Amul Milk
                </Typography>
                <Typography >
                    1 ltr.
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CardUi;