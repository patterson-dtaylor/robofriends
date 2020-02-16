import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import { robots } from '../components/robots';
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry.js'
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(reponse => reponse.json())
    //         .then(users => this.setState({robots: users}));
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length === 0){
            return <h1 className='tc light-green'>Loading...</h1>
        } else {
            return (
                <div className= 'tc'>
                    <h1 className= 'f1 light-green'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/> 
                        </ErrorBoundry>
                    </Scroll>          
                </div>
            );
        }
    }
}

export default App;