import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components';
import { LoginForm } from './components/LoginForm.js';
import firebase from 'firebase';

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

const config = {
  apiKey: "AIzaSyBSyJJ74Utpq0MmIZh4IxShEHaAvujvPrM",
  authDomain: "accessss-53f6f.firebaseapp.com",
  databaseURL: "https://accessss-53f6f.firebaseio.com",
  projectId: "accessss-53f6f",
  storageBucket: "accessss-53f6f.appspot.com",
  messagingSenderId: "653908500368",
};

export default App;