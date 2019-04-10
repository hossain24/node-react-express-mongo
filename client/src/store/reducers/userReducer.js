import { GET_USERS, NEW_USER } from '../actions/types';

const initState = {
    users: [],
    user: {}
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            console.log('reducer is working!');
            return {
                ...state,
                users: action.payload
            };
        case NEW_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
}

export default userReducer;
