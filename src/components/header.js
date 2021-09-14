import React from 'react';
//import flame from '../images/flame.png.icloud'
import background from '../images/Store.jpg'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100%',
        margin: '0',
        padding: '10em 0',
        backgroundImage: `url(${background})`,
        backgroundColor: '#cccccc',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
        position: 'relative',
        /*background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',*/
    },
    header: {
        margin: '0',
        color: 'white',
    }
});

const Header = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h1 className={classes.header}>Pheonix Nutrition Menu</h1>
        </div>
        )
}

export default Header