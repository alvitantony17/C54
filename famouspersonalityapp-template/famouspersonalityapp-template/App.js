import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  displayAlert () {
    alert("St Teresa of Culcutta")
  }
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
            onPress={() => Alert.alert('The father of computing.')} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress={() => Alert.alert('The father of nation.')} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
            onPress={() => Alert.alert('The first black president of South Africa. ')} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mother Teresa"  
            color = "green"
            //add code here to show alert box for Mother Teresa button
            onPress={this.displayAlert} 
             />
        </View>
      </View>
    )
  }
}