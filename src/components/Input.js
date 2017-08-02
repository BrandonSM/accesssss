import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
	return (
		<View>
			<Text style={styles.labelStyle}>{label}</Text>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				style={styles.inputStyle}
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
		flex:2,
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
	},
	constainerStyle: {
		flexDirection: 'row',
		flex: 1,
		height: 40,
		align: 'center',
	},

};

export { Input };