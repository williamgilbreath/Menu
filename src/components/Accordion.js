import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #e65315 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        width: '27%',
        padding: '10px 0 0'
    },
    details: {
        padding: '0'
    },
    intensiteasLeft: {
        textAlign: 'left',
        margin: '0 5px'
    },
    intensiteasRight: {
        textAlign: 'right',
        padding: '0 5px'
    },
    boxes: {
        background: 'linear-gradient(45deg, #e65315 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        width: '27%',
        margin: '0 5px',
        height: '100%'
    },
    intensiteasBox: {
        background: 'linear-gradient(45deg, #e65315 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        margin: '0 5px',
        padding: '10px 20px'
    },
    comboBoxes: {
        background: 'linear-gradient(45deg, #e65315 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        width: '100%',
        textAlign: 'left',
        paddingLeft: '10px'
    }
});

const HelloWorld = () => {
    const classes = useStyles();
    return(
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Royal Tea Menu</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs>
                            <h3>Teas</h3>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" item xs>
                            <p className={classes.root}>Choose Combo Size</p>
                            <ArrowForwardIosIcon/>
                            <p className={classes.root}>Choose Tea/Aloe</p>
                            <ArrowForwardIosIcon/>
                            <p className={classes.root}>Choose Shake</p>
                        </Grid>
                        <Grid item xs>
                            <p>Cherry Limeade</p>
                            <p>Fruit Punch</p>
                            <p>Lemonade</p>
                            <p>Pineapple</p>
                            <p>Strawberry Lemonade</p>
                            <p>Skittles</p>
                            <p>Blue Raspberry</p>
                            <p>Green Apple</p>
                            <p>Mermaid</p>
                        </Grid>
                        <h4 className={classes.intensiteasBox}>High Intensi-Teas</h4>
                        <Grid item xs container direction="row" justifyContent="space-between" alignContent="center">
                            <Grid item xs className={classes.intensiteasLeft}>
                                <p>Pheonix (H30)</p>
                                <p>Superman (Prepare)</p>
                                <p>Wonder Woman (Prepare)</p>
                                <p>Aquaman (Prepare)</p>
                                <p>Green Lantern (Prepare)</p>
                                <p>Purple Reign (Prepare)</p>
                                <p>ImmuniTea (Best Defense)</p>
                                <p>Ice Coffee (Keto Friendly)</p>
                            </Grid>
                            <Grid item xs className={classes.intensiteasRight}>
                                <p>Skittles</p>
                                <p>Pixie Stick</p>
                                <p>Mermaid</p>
                                <p>Gushers</p>
                                <p>BeauTea</p>
                                <p>LemonBerry</p>
                            </Grid>
                        </Grid>
                    </Grid>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Shake Recipes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-start">
                        <Grid item xs container direction="column" justifyContent="flex-start" className={classes.intensiteasLeft} className={classes.boxes}>
                            <p>Almond Joy</p>
                            <p>Banana Moon Pie</p>
                            <p>Brownie Praline</p>
                            <p>Banana Nut Bread</p>
                            <p>Banana Split</p>
                            <p>Billionaire Pie</p>
                            <p>Birthday Cake</p>
                            <p>Blueberry Donut</p>
                            <p>Blueberry Muffin</p>
                            <p>Butter Pecan</p>
                            <p>Caramel Brulee</p>
                            <p>Cinnamon Toast Crunch</p>
                            <p>Carrot Cake</p>
                            <p>Chunky Monkey</p>
                            <p>Cinnamon Roll</p>
                        </Grid>
                        <Grid item xs container direction="column" justifyContent="flex-start" alignItems="center" className={classes.boxes}>
                            <p>Coconut Cream Pie</p>
                            <p>Chocolate Chip Cookie Dough</p>
                            <p>Dreamsicle</p>
                            <p>Fruity Pebbles</p>
                            <p>German Chocolate</p>
                            <p>Key Lime Pie</p>
                            <p>Mint Chocolate Chip</p>
                            <p>Mud Slide</p>
                            <p>Nutter Butter</p>
                            <p>Oatmeal</p>
                            <p>Oreo Cheesecake</p>
                            <p>PB Oatmeal Cookie</p>
                            <p>Peppermint Bark</p>
                            <p>Pina Colada</p>
                        </Grid>
                        <Grid item xs container direction="column" justifyContent="flex-start" className={classes.intensiteasRight} className={classes.boxes}>
                            <p>Pineapple Upside-Down</p>
                            <p>Pecan Pie</p>
                            <p>Pumpkin Pie</p>
                            <p>Red Velvet</p>
                            <p>Reese's</p>
                            <p>Rocky Road</p>
                            <p>Samoa</p>
                            <p>S'mores</p>
                            <p>Snickers</p>
                            <p>Sopapilla Cheesecake</p>
                            <p>Strawberry Banana</p>
                            <p>Strawberry Cheesecake</p>
                            <p>Turtle Cheesecake</p>
                            <p>White Chocolate Raspberry</p>
                            <p>Zebra</p>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Combos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" className={classes.comboBoxes}>
                        <Grid item xs>
                            <p>Mega Combo</p>
                        </Grid>
                        <Grid item xs>
                            <p>Regular Combo</p>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default HelloWorld