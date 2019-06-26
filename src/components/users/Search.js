import React, { useState } from 'react'

import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClearBtn, clearUsers, handleSearchAlert }) => {
    const [text, setText] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (text === '') {
            handleSearchAlert('Please Enter a Name', 'light');
        } else {
            searchUsers(text);
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
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    handleSearchAlert: PropTypes.func.isRequired
}

export default Search
