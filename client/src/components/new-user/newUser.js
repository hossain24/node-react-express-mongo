import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUser } from '../../store/actions/user'
import './newUser.css';

class NewUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        this.props.newUser(user)
    }
    static propTypes = {
        newUser: PropTypes.func.isRequired
    };

    render() {
        console.log(this.props);
        // const { users } = this.props;
        return (
            <div className="newUser">
                <h3>Create User: </h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" name="firstName" onChange={this.onChange} value={this.state.firstName}></input>
                    </div>
                    <br />
                    <div>
                        <label>Last Name: </label>
                        <input type="text" name="lastName" onChange={this.onChange} value={this.state.lastName}></input>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { newUser })(NewUser);
