import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native';


export default class AntraUzd extends Component {
 
  constructor(){
    super();
    this.state = {
       tekstas1: false,
       tekstas2: false,
       tekstas3: false,
       tekstas4: false
    }
  }

  onPressBtn1()
  {
    if(this.state.tekstas1) this.setState({tekstas1: false});
    else this.setState({tekstas1: true});
  }

  onPressBtn2()
  {
    if(this.state.tekstas2) this.setState({tekstas2: false});
    else this.setState({tekstas2: true});
  }

  onPressBtn3()
  {
    if(this.state.tekstas3) this.setState({tekstas3: false});
    else this.setState({tekstas3: true});
  }

  onPressBtn4()
  {
    if(this.state.tekstas4) this.setState({tekstas4: false});
    else this.setState({tekstas4: true});
  }  
  
  render() {

    return (
      
    <View style={stilius.containeris}>
          
       <View style={stilius.apatinePuse}>

        <TouchableHighlight onPress={this.onPressBtn1.bind(this)}>
          <View style={stilius.mygtukas}>
            <Text style={stilius.mygtukasTekstas}>Mygtukas Nr.1</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onPressBtn2.bind(this)}>
          <View style={stilius.mygtukas}>
            <Text style={stilius.mygtukasTekstas}>Mygtukas Nr.2</Text>
          </View>
        </TouchableHighlight>
          
        <TouchableHighlight onPress={this.onPressBtn3.bind(this)}>
          <View style={stilius.mygtukas}>
            <Text style={stilius.mygtukasTekstas}>Mygtukas Nr.3</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onPressBtn4.bind(this)}>
          <View style={stilius.mygtukas}>
            <Text style={stilius.mygtukasTekstas}>Mygtukas Nr.4</Text>
          </View>
        </TouchableHighlight>

       </View>
      

       <View style={stilius.virsutinePuse}>

          <Text style ={this.state.tekstas1 ? stilius.tekstasPakeistas: stilius.tekstasPradinis}>Tekstas Nr. 1</Text>
          <Text style ={this.state.tekstas2 ? stilius.tekstasPakeistas: stilius.tekstasPradinis}>Tekstas Nr. 2</Text>
          <Text style ={this.state.tekstas3 ? stilius.tekstasPakeistas: stilius.tekstasPradinis}>Tekstas Nr. 3</Text>
          <Text style ={this.state.tekstas4 ? stilius.tekstasPakeistas: stilius.tekstasPradinis}>Tekstas Nr. 4</Text>

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
  mygtukas: {
    marginTop: 30,
    width: 150,
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  mygtukasTekstas: {
    padding: 10,
    color: 'black'
  },
  tekstasPradinis: {
    margin: 10,
    padding: 10, 
    textAlign:"center", 
    borderStyle:"solid",
    borderWidth: 5, 
    borderColor:"#7FFFD4", 
    color:"black"
  },
  tekstasPakeistas: {
   margin: 10,
   padding: 10, 
   textAlign:"center", 
   borderStyle:"solid",
   borderWidth: 5, 
   borderColor:"#7FFFD4", 
   color:"white"
  },
})
