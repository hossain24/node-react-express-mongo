import React, { Component } from 'react';
import '../users/users.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => this.setState({ users: users }, () => {
                console.log('The list of usersi is fetched ', users);
            }))
    }

    render() {
        return (
            <div className="Users">
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
