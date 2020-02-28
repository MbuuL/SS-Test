import React, { Component } from 'react';
import SearchResult from './SearchResult'
import SearchForm from './SearchForm'
import {connect} from 'react-redux'

class App extends Component {
    state = {
        username: null
    }
    handleSearch = (e) => {
        e.preventDefault()
        console.log(e)
    }
    handleUsername = (username) => {
        this.setState(username)
    }
    render() {
        return (
            <div className="App">
                <h1>
                    Hello World!
                </h1>
                <SearchForm handleUsername />
                <SearchResult username />
            </div>
          );
    }
}
const username = (state) => {
    return {
        username: state.username
    }
}
export default connect(username)(App);
