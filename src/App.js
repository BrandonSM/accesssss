import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components';
import { LoginForm } from './components/LoginForm.js';
import firebase from 'firebase';
const config = require('./../config/firebase.config.js');

class App extends Component {

	componentWillMount() {
		firebase.initializeApp(config);
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

const styles = {


};

export default App;