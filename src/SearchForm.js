import React, { Component } from 'react';
import {connect} from 'react-redux'

class SearchForm extends Component {
    state = {
        username: null
    }
    handleInput = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchRepo(this.state.username)
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "username">Username: </label>
                    <input type = "text" id = "username" onChange = {this.handleInput} />
                </form>
            </div>
        )
    }
}
const username = (state) => {
    return {
        username: state.username
    }
}
const mapDispatch = (dispatch) => {
    return {
        searchRepo: (username) => {dispatch({
            type: 'SEARCH', username: username
        })}
    }
}
export default connect(username, mapDispatch)(SearchForm)