import "./App.css";
import Word from "./components/Word/Word";

function App({ store }) {
    let tmp;
    let onChange = (e) => {
        tmp = e.target.value;
    };
    let onClick = (e) => {
        alert(tmp);
    };
    return <Word />;
}

export default App;
