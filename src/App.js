import './App.css';
import HelloWorld from './components/Accordion'
import Header from './components/header'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        height: '100vh'
    },
    header: {
        height: '100vh'
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className="App" >
            <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch" classname={classes.root}>
                <Grid item xs>
                    <Header/>
                </Grid>
            </Grid>
        </div>
  );
}

export default App;
