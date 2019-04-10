import { GET_USERS, NEW_USER } from './types';

export const getUsers = () => dispatch => {
    // console.log('its working!');
    fetch('/api/users')
        .then(res => res.json())
        .then(users => dispatch({
            type: GET_USERS,
            payload: users
        },
            console.log('The list of users: ', users)
        )
        )
};

export const newUser = postUser => dispatch => {
    console.log('its working!', postUser);
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postUser)
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: NEW_USER,
            payload: user
        },
            console.log('The list of users: ', user)
        )
        )
};