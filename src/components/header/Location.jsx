
import { Grid, TextField } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


const Location = () => {
    return (
        <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <AccountCircle />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
        </Grid>
    )
};

export default Location;