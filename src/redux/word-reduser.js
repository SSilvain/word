const ENTER_WORD = "ENTER_WORD";

let initialState = {
    words: [{ id: 0, value: "first word" }],
    currentWord: "hi",
    tmpWord: "Enter Word or Phrases",
};
const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_WORD:
            return { ...state, tmpWord: action.tmpWord };
        default:
            return state;
    }
    // return state;
};

export const enterWordCreateAction = (tmpWord) => ({
    type: "ENTER_WORD",
    tmpWord,
});

export default wordReducer;
