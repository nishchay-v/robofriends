import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar'
import { robots }from "./robots";

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: ''
        }
    }

    onSearch = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filterRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <SearchBar searchChange = {this.onSearch}/>
                <CardList displayRobots = {filterRobots}/>
            </div>
        )
    }
}

export default App;