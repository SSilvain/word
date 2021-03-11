import { enterWordCreateAction } from "../../redux/word-reduser"

function Word(props) {
    let tmp;
    let onChange = (e) => {
        tmp = e.target.value;
    };
    let onClick = (e) => {
        alert(tmp);
    };
    let outWord = props.store.getState().word.tmpWord;
    let setTmpWord = (e) => {
        let tmpWord = e.target.value
        // debugger;
        props.store.dispatch(enterWordCreateAction(tmpWord));
    }
    return (
        <div className="Word">
            <input onChange={setTmpWord} placeholder="enter word" />
            <button onClick={onClick}>Send</button>
            <h1>{outWord}</h1>
        </div>
    );
}

export default Word;