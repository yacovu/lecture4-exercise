import React from 'react';
import {SectionList, StyleSheet, Text, Button, SafeAreaView, View} from 'react-native';
import Row from './Row.js'
import ObjectsForm from './ObjectsForm.js'


export default class App extends React.Component {
  state = {
    showObjects: false,
    showAddObjectForm: false,
    objectsArray: []
  }


  addObject = newObject  => {
    this.setState(prevState => ({showAddObjectForm: false, objectsArray: [...prevState.objectsArray, newObject]}))
    // this.setState(() => ({showAddObjectForm: false}))
    // alert(this.state.objectsArray)
  }

 // renderItem = ({item}) => <Row {...item} />

 renderItem = obj => <Row {...obj.item} />

 // renderSectionHeader = ({section}) => <Text>{section.title}</Text>

 renderSectionHeader = obj => <Text> {obj.section.title} </Text>

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

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View>
          <Button title="Toggle Objects" onPress={this.toggleObjects}/>
          <Button title="Add Object" onPress={this.showAddObjectForm}/>
         
          {this.state.showObjects &&
            <SectionList
              renderItem={this.renderItem}
              renderSectionHeader={this.renderSectionHeader}
              sections={[{
                title: "a",
                data: this.state.objectsArray,
                // title: Object.keys(this.state.objectsArray),x
                // data: Object.values(this.state.objectsArray)
              }]}
            />}        
          
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