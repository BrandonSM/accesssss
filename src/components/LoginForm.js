import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './';

class LoginForm extends Component {

	state = { text: '' };

	render() {
		return(
			<Card>
				<CardSection>
					<Input
						value={this.state.text}
						onChangeText={text=> this.setState({ text })}
					/>
				</CardSection>
				<CardSection/>
				<CardSection>
					<Button style={styles.buttonStyle}>LOGIN</Button>
				</CardSection>
			</Card>
		);
	}
}
console.log("INPUT VALUE =" + Input);

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