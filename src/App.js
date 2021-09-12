import './App.css';
import HelloWorld from './components/Accordion'
import Header from './components/header'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '0',
        padding: '5em 0',
        backgroundImage: 'url(`${flame}`)',
        backgroundColor: '#cccccc',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
    backgroundImage: {
        width: '100%',
    }
});

function App() {
    const classes = useStyles();
  return (
    <div className="App">
        <Header/>
        <HelloWorld/>
    </div>
  );
}

export default App;
