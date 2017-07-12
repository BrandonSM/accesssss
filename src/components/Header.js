// Import libraries
import React, { Component } from 'react'
import { StyleSheet, Text,View } from 'react-native';

// Create Component 
const Header = (props) => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
		);
}

const styles = StyleSheet.create({
	viewStyle: {

	},
	textStyle: {

	},
});

// Make component available
export { Header };