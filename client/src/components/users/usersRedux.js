import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/user';
import { newUser } from '../../store/actions/user';
import './users.css';

class UsersRedux extends Component {

    static propTypes = {
        getUsers: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
        // newUser: PropTypes.Object
    }

    static defaultProps = {
        users: []
    }

    componentWillMount() {
        this.props.getUsers();
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.newUser) {
            this.props.users.unshift(nextProps.newUser);
        }
    }
    render() {
        console.log(this.props);
        // const { users } = this.props;
        const usersList = this.props.users.map(user =>

            <li key={user.id}>{user.firstName}{user.lastName}</li>
        )

        return (
            <div className="usersRedux">
                <h3>Users List: </h3>
                <ul>
                    {usersList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    newUser: state.users.user
})

const dispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
    newUser: () => dispatch(newUser())
})

export default connect(mapStateToProps, dispatchToProps)(UsersRedux);
