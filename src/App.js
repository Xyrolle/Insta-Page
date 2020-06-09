import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Posts from './components/Posts';
import Profile from './components/Profile';
import Modal from './components/Modal';

import './styles/App.css';

class App extends Component {
	state = {
		showModal : false
	};

	toggleModal = () => {
		this.setState({
			showModal : !this.state.showModal
		});
	};

	render() {
		return (
			<div>
				<Router>
					<Route path='/:id' component={Modal} />
					<Profile />
					<Posts toggleModal={this.toggleModal} />
				</Router>
			</div>
		);
	}
}

export default App;
