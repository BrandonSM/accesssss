import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ whenPressed, children }) => {

	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={whenPressed} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
		);
};

const styles = {
	textStyle: {

	},
	buttonStyle: {

	}
};

export { Button };