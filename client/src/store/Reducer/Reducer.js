


const initialState = {
    user: null,
    isLoggedIn: false,
    hindi: true
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            console.log("<<ADDING USER>>", action)
            return {
                ...state,
                user: action.user,
                isLoggedIn: true
            }


        case 'REMOVE_USER':
            console.log("<<REMOVING USER>>", action)
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }

        case 'CHANGE_LANG':
            console.log("<<CHANGE_LANG>>", action,state)
            return {
                ...state,
                hindi: !state.hindi
            }

        default:
            return state
    }

};
export default Reducer;