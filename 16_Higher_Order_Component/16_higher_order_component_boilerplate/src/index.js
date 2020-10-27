import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
import { Challenges } from './components/Challenges';
import { Challenge } from './components/Challenge';
import {
	BrowserRouter as Router,
	Prompt,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { Social } from './components/Social';
import { socialDetails } from './data/challengeData';
import { Login } from './components/Login';
import { User } from './components/User';

class App extends Component {
	state = {
		loggedIn: false,
		firstName: 'cyril',
	};
	handleLogin = () => {
		this.setState({ loggedIn: !this.state.loggedIn });
	};
	render() {
		return (
			<Router>
				<div className='App'>
					<NavBar userName={this.state.firstName} />
					<Prompt message='Are you sure you want to leave' />
					<Switch>
						<Route path='/contact' component={Contact} />
						<Route path='/about' exact component={About} />
						<Route
							path='/login'
							component={(props) => (
								<Login
									{...props}
									loggedIn={this.state.loggedIn}
									handleLogin={this.handleLogin}
								/>
							)}
						/>
						<Route
							path='/user/:username'
							component={(props) => (
								<User
									{...props}
									loggedIn={this.state.loggedIn}
									handleLogin={this.handleLogin}
								/>
							)}
						/>
						<Route
							path='/about/:id'
							component={(props) => <Social {...props} data={socialDetails} />}
						/>
						<Route
							path='/challenges'
							exact
							component={(props) =>
								this.state.loggedIn ? (
									<Challenges {...props} />
								) : (
									<Redirect to='/user/cyril' />
								)
							}
						/>
						<Route path='/challenges/:id' component={Challenge} />
						<Route path='/' exact component={Home} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
