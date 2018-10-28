import React from 'react';
import {SectionList, StyleSheet, Text, Button, SafeAreaView, View} from 'react-native';
import Row from './Row.js'
import ObjectsForm from './ObjectsForm.js'
import ObjectsList from './ObjectsList.js'


export default class App extends React.Component {
  state = {
    showObjects: false,
    showAddObjectForm: false,
    objectsArray: []
  }


  addObject = newObject  => {
      this.setState(prevState => ({showAddObjectForm: false, objectsArray: [...prevState.objectsArray, newObject]}))
  }

 toggleObjects = () => {
  this.setState(prevState => ({showObjects: !prevState.showObjects}))
 }

 showAddObjectForm = () => {
  this.setState(() => ({showAddObjectForm: true}))
 }


  render() {
    if (this.state.showAddObjectForm) {
      return  <ObjectsForm onSubmit={this.addObject}/> //render happens in ObjectsForm 

    }
    // console.log(this.state.objectsArray)

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View>
          <Button title="Toggle Objects" onPress={this.toggleObjects}/>
          <Button title="Add Object" onPress={this.showAddObjectForm}/>
          {this.state.showObjects &&
            <ObjectsList objectsArray={this.state.objectsArray} />}        
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});