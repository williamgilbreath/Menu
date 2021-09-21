import React, { useState } from 'react';
//import flame from '../images/flame.png.icloud'
import logo from '../images/logo.JPG'
import juiceIcon from '../images/Juice.png'
import background from '../images/Store.jpg'
import { makeStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        width: '100vw',
        /*backgroundImage: `url(${background})`,
        backgroundColor: '#cccccc',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',
        backgroundSize: 'cover',
        position: 'relative',*/
    },
    header: {
        marginTop: '-20px',
        paddingTop: '30px',
        paddingBottom: '10px',
        color: 'white',
        backgroundColor: '#f59842',
        borderBottom: '6px solid #f59842',
        borderRadius: '20px',
    },
    icons: {
        width: '15em'
    },
    paperClass: {
        margin: '10px 20px',
        padding: '5px 5px'
    },
    button: {
        backgroundColor: '#007fff',
        padding: '15px 20px',
        margin: '10px 15px',
        borderRadius: '10px',
        color: '#fff',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: '0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0)',
        border: 'none',
    }
});

const MenuTabs = styled(Tabs)({
    backgroundColor: '#f59842',
    color: 'white',
    borderRadius: '20px',
    marginBottom: '-20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #f59842',
    '& .MuiTabs-indicator': {
        backgroundColor: 'white',
    },
});

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    let pageLoad = false;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className={classes.root}>
            <div className={classes.backgroundColor}>
                <h1 className={classes.header}>Pheonix Nutrition Menu</h1>
            </div>
            <div onLoad={pageLoad = true}>
                {
                    pageLoad ?
                        <Grow in={pageLoad} timeout={2000}>
                            <Paper elevation={0} className={classes.paper}>
                                <img src={logo} className={classes.icons}/>
                            </Paper>
                        </Grow> : null
                }
            </div>
                {
                    value == 0 ?
                        <Grow in={true} timeout={1500}>
                            <Paper elevation={4} className={classes.paperClass} style={{maxHeight: 190, overflow: 'auto'}}>
                                <Grid container direction="column" justifyContent="center" alignItems="center">
                                    <Grid item xs container direction="row" justifyContent="center" alignItems="flex-start">
                                        <Grid item xs>
                                            <h2>Facebook</h2>
                                            <p>Message us on Facebook to order!</p>
                                            <a className={classes.button} href="https://www.facebook.com/phoenixnutritionreborn/">facebook.com/phoenixnutritionreborn/</a>
                                        </Grid>
                                        <Grid item xs>
                                            <h2>Phone: </h2>
                                            <a className={classes.button} href="tel:+1-806-701-1306">(806) 701-1306</a>
                                            <h2>Location: </h2>
                                            <p className={classes.button}>4713 W Loop 289, Lubbock, TX 79414</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grow>: null
                }
            {
                value == 1 ?
                    <Grow in={true} timeout={1500}>
                        <Paper elevation={4} className={classes.paperClass} style={{maxHeight: 190, overflow: 'auto'}}>
                            <Grid container direction="column">
                                <Grid item xs>
                                    <h2>Royal Tea Menu</h2>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Cherry Limeade</p>
                                        <p>Fruit Punch</p>
                                        <p>Lemonade</p>
                                    </Grid>
                                    <Grid item xs>
                                        <p>Pineapple</p>
                                        <p>Strawberry Lemonade</p>
                                        <p>Skittles</p>
                                    </Grid>
                                    <Grid item xs>
                                        <p>Blue Raspberry</p>
                                        <p>Green Apple</p>
                                        <p>Mermaid</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs>
                                    <h3>High Intensi-Teas</h3>
                                        <p>Pheonix (H30)</p>
                                        <p>Superman (Prepare)</p>
                                        <p>Wonder Woman (Prepare)</p>
                                        <p>Aquaman (Prepare)</p>
                                        <p>Green Lantern (Prepare)</p>
                                        <p>Purple Reign (Prepare)</p>
                                        <p>ImmuniTea (Best Defense)</p>
                                        <p>Ice Coffee (Keto Friendly)</p>
                                        <p>Skittles</p>
                                        <p>Pixie Stick</p>
                                        <p>Mermaid</p>
                                        <p>Gushers</p>
                                        <p>BeauTea</p>
                                        <p>LemonBerry</p>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grow> : null
            }
            {
                value == 2 ?
                    <Grow in={true} timeout={1500}>
                        <Paper elevation={4} className={classes.paperClass} style={{maxHeight: 180, overflow: 'auto'}}>
                            <Grid container direction="column">
                                <Grid item xs>
                                    <h2>Shake Recipes</h2>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p className={classes.shakeItems}>Almond Joy</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Banana Moon Pie</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Brownie Praline</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Banana Nut Bread</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Banana Split</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Billionaire Pie</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Birthday Cake</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Blueberry Donut</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Blueberry Muffin</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Butter Pecan</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Caramel Brulee</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Cinnamon Toast Crunch</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Carrot Cake</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Chunky Monkey</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Cinnamon Roll</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Coconut Cream Pie</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Chocolate Chip Cookie Dough</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Dreamsicle</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Fruity Pebbles</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>German Chocolate</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Key Lime Pie</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Mint Chocolate Chip</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Mud Slide</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Nutter Butter</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Oatmeal</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Oreo Cheesecake</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>PB Oatmeal Cookie</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Peppermint Bark</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Pina Colada</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Pineapple Upside-Down</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Pecan Pie</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Pumpkin Pie</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Red Velvet</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Reese's</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Rocky Road</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Samoa</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>S'mores</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Snickers</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Sopapilla Cheesecake</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Strawberry Banana</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>Strawberry Cheesecake</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Turtle Cheesecake</p>
                                    </Grid>
                                </Grid>
                                <Grid item xs container direction="row" justifyContent="space-around" alignItems="flex-start">
                                    <Grid item xs>
                                        <p>White Chocolate Raspberry</p>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem />
                                    <Grid item xs>
                                        <p>Zebra</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grow> : null
            }
            {
                value == 3 ?
                    <Grow in={true} timeout={1500}>
                        <Paper elevation={4} className={classes.paperClass} style={{maxHeight: 190, overflow: 'auto'}}>
                            <h2>Combos</h2>
                            <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
                                <Grid item xs>
                                    <p>Mega Combo</p>
                                </Grid>
                                <Grid item xs>
                                    <p>Regular Combo</p>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grow>: null
            }
            <Box sx={{ maxWidth: 480, position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                <MenuTabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Royal Tea" value={1}/>
                    <Tab label="Shake Recipes" value={2}/>
                    <Tab label="Combos" value={3}/>
                    <Tab label="Info" value={0}/>
                </MenuTabs>
            </Box>
        </div>
        )
}

export default Header