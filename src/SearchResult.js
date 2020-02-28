import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

class SearchResult extends Component {
    state = {
        repos: []
    }
    componentDidUpdate() {
        axios.get(`https://api.github.com/users/${this.props.username}/repos`)
            .then(res => {
                let repos = []
                res.data.map(repo => {
                    repos.push({
                        id: repo.id,
                        name: repo.name,
                        description: repo.description,
                        url: repo.html_url
                    })
                })
                return this.setState({repos: repos})
            })
    }
    let
    render() {
        let repos = this.state.repos
        let RepoList = repos.map(repo => {
            return (
                <div className = "repo">
                    <p>id: {repo.id}</p>
                    <p>Name: {repo.name}</p>
                    <p>Description: {repo.description}</p>
                    <p>url: {repo.html_url}</p>
                </div>
            )
        })
        return (
            <div className="Result">
                <h1>Search Result</h1>
                <p>Username: {this.props.username}</p>
                {RepoList}
            </div>
        )
    }
}
const username = (state) => {
    return {
        username: state.username
    }
}
export default connect(username)(SearchResult)