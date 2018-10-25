import React from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import Row from './Row.js'


export default class ObjectsForm extends React.Component {
	state ={
		key: "Key",
		value: "Value"
	}

	addObject = () => ({
		
	})

	render() {
		return (
			<View>
				<TextInput style={styles.input} value={this.state.key}/>
				<TextInput style={styles.input} value={this.state.value}/>
				<Button title={"Add Object"} onPress={this.addObject}/>
			</View>
			)

	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
