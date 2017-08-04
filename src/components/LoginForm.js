import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './';

import firebase from 'firebase';

class LoginForm extends Component {

	state = { email: '', password: '' };

	onButtonPress() {
		const {email,password} = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password);
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder={'someone@example.com'}
						value={this.state.email}
						onChangeText={email=> this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						placeholder={'password'}
						value={this.state.password}
						onChangeText={password=> this.setState({ password })}
						secureTextEntry={true}
					/>
				</CardSection>
				<CardSection>
					<Button 
						style={styles.buttonStyle}
						onPress={this.onButtonPress.bind(this)}>
						LOGIN
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch', // Stretch to fill limits of container
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	}
};

export { LoginForm };