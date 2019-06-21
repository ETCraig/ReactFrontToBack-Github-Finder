import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: '',
        html_url: ''
    }
    render() {
        const { login, avatar_url, html_url } = this.state;
        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    alt="Profile"
                    className="round-img"
                    style={{ width: "60px" }}
                />
                <h3>{login}</h3>
                <div>
                    <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
                </div>
            </div>
        );
    }
}

export default UserItem
