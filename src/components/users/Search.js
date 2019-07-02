import React, { useState, useContext } from 'react'

import GitHubContext from '../../context/github/gitHubContext';

import PropTypes from 'prop-types';

const Search = ({ showClearBtn, clearUsers, handleSearchAlert }) => {
    const gitHubContext = useContext(GitHubContext);
    const [text, setText] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (text === '') {
            handleSearchAlert('Please Enter a Name', 'light');
        } else {
        gitHubContext.searchUsers(text);
            setText('');
        }
    }

    const handleChange = e => setText(e.target.value);

    return (
        <div onSubmit={handleSubmit}>
            <form className="form" >
                <input
                    type="text"
                    name="text"
                    placeholder="Search Users"
                    value={text}
                    onChange={handleChange}
                />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {showClearBtn && (
                <button className="btn btn-light btn-block" onClick={clearUsers}>
                    Clear
                </button>
            )}
        </div>
    );
}

Search.propsTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    handleSearchAlert: PropTypes.func.isRequired
}

export default Search
