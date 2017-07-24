import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Button, Card, CardSection } from './';

class LoginForm extends Component {
	render() {
		return(
			<Card>
				<CardSection>
					<TextInput style={styles.textInputStyle}></TextInput>
				</CardSection>
				<CardSection/>
				<CardSection>
					<Button style={styles.buttonStyle}>LOGIN</Button>
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
	textInputStyle: {
		width:100,
		height:25,
		borderWidth:1,
		borderColor:'#AFAFAF',
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