import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './';


class App extends Component {
	render() {
		return(
			<View>
				<Header headerText="Authentication" />
				<Text>Accessss</Text>
			</View>
		);
	}
}

const styles = {


};

export default App;