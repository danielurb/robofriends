import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(responce => responce.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange(event) {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>
			robot.name.toLowerCase().includes(searchfield.toLowerCase())
		);

		return robots.length ? (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />;
				</Scroll>
			</div>
		) : (
			<h1>Loading...</h1>
		);
	}
}
