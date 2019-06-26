import React, { Component, Fragment } from 'react'

import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        const { repos, loading } = this.props;

        if (loading) return <Spinner />
        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back To Search</Link>
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
                <div className="card grid-2">
                    <div className="all-center">
                        <img 
                            src={avatar_url} 
                            className="round-img" 
                            alt="profile" 
                            style={{width: "150px"}} 
                        />
                        <h1>{name}</h1>
                        <p>{location}</p>
                    </div>
                    <div>
                        {bio &&( 
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment> 
                        )}
                        <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
                        <ul>
                            <li>
                                {login && (
                                    <Fragment>
                                        <strong>Username: </strong> {login}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {company && (
                                    <Fragment>
                                        <strong>Company: </strong> {company}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {blog && (
                                    <Fragment>
                                        <strong>Website: </strong> {blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">
                        Followers: {followers}
                    </div>
                    <div className="badge badge-primary">
                        Following: {following}
                    </div>
                    <div className="badge badge-success">
                        Public Repos: {public_repos}
                    </div>
                    <div className="badge badge-info">
                        Public Gists: {public_gists}
                    </div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        );
    }
}

export default User
