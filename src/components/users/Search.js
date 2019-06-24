import React, { Component } from 'react'

import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ""
    }

    static propsTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClearBtn: PropTypes.bool.isRequired,
        handleSearchAlert: PropTypes.func.isRequired
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.handleSearchAlert('Please Enter a Name', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { showClearBtn, clearUsers } = this.props;
        return (
            <div onSubmit={this.handleSubmit}>
                <form className="form" >
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClearBtn && (
                    <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                )}
            </div>
        );
    }
}

export default Search
