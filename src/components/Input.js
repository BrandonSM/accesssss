import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {

	const {labelStyle, constainerStyle, inputStyle } = styles;

	return (
		<View style={constainerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				autoCorrect={false}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex:4,
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		lineHeight:23,
		flex: 1,
	},
	constainerStyle: {
		flexDirection: 'row',
		flex: 1,
		height: 40,
		alignItems: 'center',
	},

};

export { Input };