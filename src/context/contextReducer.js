// Reducer is a function that takes in the old state and an action and returns a new state

const contextReducer = (state, action) => {
switch (action.type){
    case 'DELETE_TRANSACTION':
        const transactions = state.filter((t) => t.id ===)

    break;
    case 'ADD_TRANSACTION':
        break;
        default:
            break;
}
}

export default contextReducer;