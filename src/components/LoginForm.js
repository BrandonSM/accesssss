import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './';
import firebase from 'firebase';

class LoginForm extends Component {

	state = { email: '', password: '', error: '', loading: false };

	// Helper method for handling when the user presses the 'Login' button.
	// it clears any error message on the screen, and displays the loading spinner.
	// It then tries to login to firebase with the email,password combination.
	onButtonPress () {
		console.log("PRESSING BUTTON");
		const { email,password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(()=>{
						this.setState({ error: 'Invalid email and/or password.' });
						console.log(this.state.error);
					});
			}); 
	}

	// Helper method to determine if the button is rendered or if the spinner is rendered
	renderButton () {
		// Boolean so doesn't need === true, just if it is there
		// doesn't need an else, because you can only return one object.
		if (this.state.loading) {
			return <Spinner size="small" />;
		} 

		return (
			<Button 
				style={styles.buttonStyle}
				onButtonPress={this.onButtonPress.bind(this)}>
				LOGIN
			</Button>
		);
		console.log("RENDERED BUTTON");
	}

	render() {
		return (
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

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
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
	},
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
		lineHeight: 50,
	}
};

export { LoginForm };