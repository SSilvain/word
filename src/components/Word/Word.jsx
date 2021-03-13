import { enterWordCreateAction } from "../../redux/word-reduser"
import { connect } from "react-redux";
import s from "../../components/Word/Word.module.css"

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const Word = (props) => {
    let outWord = props.tmpWord;

    if (!props.tmpWord) {
        outWord = "Enter Word";
    }

    let setTmpWord = (e) => {
        let tmpWord = e.target.value

        // console.log(outWord);
        // debugger;
        props.enterWord(tmpWord);
    }
    // debugger;
    const classes = useStyles();
    return (
        <div className={s.wordWrap}>
            {/* <input onChange={setTmpWord} placeholder="enter word" /> */}
            <h1 className={s.word}>{outWord}</h1>

            <TextField
                onChange={setTmpWord}
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                // helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button variant="contained" color="primary">Send</Button>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        tmpWord: state.word.tmpWord
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        enterWord: (tmpWord) => {
            dispatch(enterWordCreateAction(tmpWord));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Word);