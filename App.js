

// import React, {Component} from 'react';
import React from 'react';
// import {Platform, SectionList, StyleSheet, Text, View} from 'react-native';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import Row from './Row.js'
import ObjectsForm from './ObjectsForm.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ObjectsForm/>
        
        
        
      </View>
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
