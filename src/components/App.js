import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './';
import firebase from 'firebase';
const config = require('./../../config/firebase.config.js');

class App extends Component {

	componentWillMount() {
		firebase.initializeApp(config);
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				<Text>Accessss</Text>
			</View>
		);
	}
}

const styles = {


};

export default App;