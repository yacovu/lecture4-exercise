import React from 'react';
import {Button, TextInput, SafeAreaView, View, StyleSheet} from 'react-native';
import Row from './Row.js'


export default class ObjectsForm extends React.Component {
	state = {
		objectName: "",
		objectValue: ""
	}

	handleObjectNameChange = objectName => {
		this.setState({objectName})
	}

	handleObjectValueChange = objectValue => {
		this.setState({objectValue})
	}


	handleAddObject = () => {
		// this.props.addObject(this.state.objectName, this.state.objectValue)
		this.props.onSubmit(this.state)
	}

	render() {
		return (
			<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
				<View>
					<TextInput style={styles.input} placeholder={"Name"} value={this.state.objectName} onChangeText={this.handleObjectNameChange}/>
					<TextInput style={styles.input} placeholder={"Value"} value={this.state.objectValue} onChangeText={this.handleObjectValueChange}/>
					<Button title={"Add"} onPress={this.handleAddObject}/>
				</View>
			</SafeAreaView>
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
