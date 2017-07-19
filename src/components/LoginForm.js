import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection } from './';

class LoginForm extends Component {
	render() {
		return(
			<Card>
				<CardSection/>
				<CardSection/>
				<CardSection>
					<Button>LOGIN</Button>
				</CardSection>
			</Card>
		);
	}
}

export { LoginForm };