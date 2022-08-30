const initState = {};

export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}
