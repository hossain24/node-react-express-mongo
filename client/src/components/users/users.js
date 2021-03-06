import React, { Component } from 'react';
import './users.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => this.setState({ users: users }, () => {
                console.log('The list of users is fetched ', users);
            }))
    }

    render() {
        return (
            <div className="users">
                <h3>Users List: </h3>
                <ul>
                    {this.state.users.map(user =>
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Users;
