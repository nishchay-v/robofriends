import React, { Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar'
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            robots: []
        }
    }

    onSearch = (event) => {
        this.setState({searchField: event.target.value});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const filterRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBar searchChange = {this.onSearch}/>
                <CardList displayRobots = {filterRobots}/>
            </div>
        )
    }
}

export default App;