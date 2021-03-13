import { enterWordCreateAction } from "../../redux/word-reduser"
import { connect } from "react-redux";

const Word = (props) => {

    let outWord = props.tmpWord;

    let setTmpWord = (e) => {
        let tmpWord = e.target.value

        // console.log(outWord);
        // debugger;
        props.enterWord(tmpWord);
    }
    // debugger;
    return (
        <div className="Word">
            <input onChange={setTmpWord} placeholder="enter word" />
            <button >Send</button>
            <h1>{outWord}</h1>
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