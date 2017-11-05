import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';


export default class AntraUzd extends Component {

 
  
  render() {

    return (
      
    <View style={stilius.containeris}>
          
       <View style={stilius.apatinePuse}>

       </View>
      
       <View style={stilius.virsutinePuse}>

       </View>
        

    </View>

      
    );
  }
}


const stilius = StyleSheet.create({
  containeris: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent:"center", 
    alignItems:"center"
  },
  apatinePuse: {
    width: "100%", 
    height: "100%", 
    backgroundColor: "#7FFFD4", 
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: "wrap", 
    justifyContent:"space-around", 
    alignItems:"center"
  },
  virsutinePuse: {
    width: "100%", 
    height: "100%", 
    backgroundColor: 'pink', 
    flex: 1, 
    flexDirection: 'column', 
    justifyContent:"center",
    alignItems:"center"
  },
})
