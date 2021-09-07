import { fade, makeStyles, Box } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
        margin: "0 7% 0 auto",
        // borderRadius: 2,
        // backgroundColor: "#fff",
        width: '60%',
        marginLeft: 10,
        display: "flex",
        color: "black",
        margin: 1,
        height:38,
    },
    searchIcon: {
        padding: theme.spacing(2, 2),
        height: '100%',
        position: 'relative',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        // fontSize:'unset',
        width: '100%',
    },
    inputInput: {
        padding: 10,
    },
}))
// boxShadow={2}
export default function SearchBar() {
    const classes = useStyles();
    return (
        <Box className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search for restaurant, cuisine or a dish"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                style={{width:"100%"}}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Box>
    )

};

