import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components';
import { LoginForm } from './components/LoginForm.js';
import { CardSection } from './components/CardSection.js';
import { Button } from './components/Button.js';
import { Spinner } from './components/Spinner.js';
import firebase from 'firebase';

class App extends Component {

	// Sets the default state of loggedIn to null. This means "I don't know if you're signed in"
	state = { loggedIn: null };

	componentDidMount() {
		firebase.initializeApp(config);

		// Do something onAuthStateChanged, based on the user object being there
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
				console.log("USER LOGGED IN - TRUE");
			} else {
				this.setState({ loggedIn: false });
				console.log("USER LOGGED IN - FALSE");
			}
		});

	}

	// Helper method to display the content, or login form
	renderContent() {
		// Determines whether the user is logged in or not, and if we don't know, displays a spinner
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onButtonPress={() => firebase.auth().signOut() }>
							Log out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return( 
					<View style={styles.spinnerContainer}>
						<Spinner size={"large"}/>
					</View>
				);
		}
	}

	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const config = {
  apiKey: "AIzaSyBSyJJ74Utpq0MmIZh4IxShEHaAvujvPrM",
  authDomain: "accessss-53f6f.firebaseapp.com",
  databaseURL: "https://accessss-53f6f.firebaseio.com",
  projectId: "accessss-53f6f",
  storageBucket: "accessss-53f6f.appspot.com",
  messagingSenderId: "653908500368",
};

const styles ={
	spinnerContainer: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
	}
};

export default App;