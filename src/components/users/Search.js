import React, { useState, useContext } from 'react'

import gitHubContext from '../../context/github/gitHubContext';

import PropTypes from 'prop-types';
import githubContext from '../../context/github/gitHubContext';

const Search = ({ handleSearchAlert }) => {
    const githubContext = useContext(gitHubContext);
    const [text, setText] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (text === '') {
            handleSearchAlert('Please Enter a Name', 'light');
        } else {
        githubContext.searchUsers(text);
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
            {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
                    Clear
                </button>
            )}
        </div>
    );
}

Search.propsTypes = {
    handleSearchAlert: PropTypes.func.isRequired
}

export default Search
