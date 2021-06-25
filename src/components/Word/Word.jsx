import s from "../../components/Word/Word.module.css"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { enterWordCreateAction } from "../../redux/word-reduser";

import react, { useState } from "react";

import { useSpeechSynthesis } from 'react-speech-kit';



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
    const [value, setValue] = useState('');

    const { speak } = useSpeechSynthesis();

    let outWord = props.tmpWord;
    // let speechTyping;
    let toSpeakOnClick = (e) => {
        let speechTyping = () => {
            // alert(tmpWord);
            return speak({ text: value });
        };
        speechTyping();
    }
    let setValueRedux = (e) => {
        props.enterWord(e.target.value);
        setValue(e.target.value)
    };


    const classes = useStyles();
    return (
        <div className={s.wordWrap}>
            <div className={classes.root}>
                <div>
                    <h1 className={s.word}>{outWord}</h1>
                    <TextField
                        onChange={setValueRedux}
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
                    <Button onClick={toSpeakOnClick} variant="contained" color="primary">Send</Button>
                </div>
            </div>
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