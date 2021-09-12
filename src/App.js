import './App.css';
import HelloWorld from './components/Accordion'
import Header from './components/header'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    header: {
        height: '75%'
    },
    accordion: {
        height: '25%'
    }
});

function App() {
    const classes = useStyles();
    return (
        <div className="App" classname={classes.root}>
            <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch">
                <Grid item xs className={classes.header}>
                    <Header/>
                </Grid>
                <Grid item xs className={classes.accordion}>
                    <HelloWorld/>
                </Grid>
            </Grid>
        </div>
  );
}

export default App;
