const initialState = {
    name: "",
    email: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'nameChange':
            return { ...state, name: action.payload }
        default:
            return state
    }
};

export default reducer