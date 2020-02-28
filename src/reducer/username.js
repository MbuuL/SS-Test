const initState = {
    username: null
}

const usernameReducer = (state = initState, action) => {
    if (action.type === "SEARCH") {
        state = {username: action.username}
    }
    return state
}

export default usernameReducer