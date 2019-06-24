import React, { Component } from 'react'

import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text: ""
    }

    static propsTypes = {
        searchUsers: PropTypes.func.isRequired
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <form className="form" >
                    <input type="text" name="text" placeholder="Search Users" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        );
    }
}

export default Search
