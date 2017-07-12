import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	);
}

const styles = {
	container : {

	},
};

export { Card };