import React from 'react';
import { Text, View, Image } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	);
};

const styles = {
	container : {

	},
};

export { CardSection };