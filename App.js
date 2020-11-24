import React from 'react';
import { StyleSheet, Image,Text, TextInput, View, Button } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>

      <View  style={styles.heading}>
        <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
        <Text style={{fontSize:40,color:'grey'}}>LOGIN</Text>
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.loginText}>Email</Text>
        <TextInput style={styles.inputText}/>
        <Text style={styles.loginText}>Password</Text>
        <TextInput style={styles.inputText}/>
        <View  style={styles.button}>
          <Button
          title="Login"
          color="green"/>
        </View>
      </View>
      
      <View style={styles.userlogin}>
        <Text style={styles.user}>New User?</Text>
        <Text style={styles.joinus}>Join US</Text>
      </View>

    
    </View>
  );
}
const styles=StyleSheet.create({
container:{
  //padding:20,
  alignItems:'center',
  
},
tinyLogo:{
  alignItems:'center',
  width:50,
  height:50,
},
heading:{
  alignItems:'center',
  paddingTop:60,
  //paddingLeft:125,
  paddingBottom:40,
  //backgroundColor:'blue',
},
inputArea:{
  //borderWidth: 1,
  borderRadius: 3,
  //borderColor: '#ddd',
  //borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 1,
  shadowRadius: 2,
  elevation: 3,
  marginLeft: 1,
  //marginRight: 5,
  //marginTop: 10,
  padding:40,
},
loginText:{
  fontSize:15,
  paddingTop:10,
  paddingBottom:5,
  marginRight:180,
},
inputText:{
  borderColor:'grey',
  borderBottomWidth:2,
},
button:{
  paddingTop:20,
  borderRadius:100,
},
userlogin:{
  flexDirection:'row',
},
user:{
  paddingTop:20,
  fontSize:17,
},
joinus:{
  paddingTop:20,
  fontSize:17,
  color:'green',
},
});
export default YourApp;