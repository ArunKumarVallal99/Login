import React from 'react';
import { StyleSheet, Image,Text, TextInput, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>

      <View  style={styles.heading}>
        <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
        <Text style={{fontSize:40}}>Login</Text>
      </View>

      <View style={styles.inputArea}>
        <Text>Email</Text>
        <TextInput style={styles.inputText}/>
        <Text>Password</Text>
        <TextInput style={styles.inputText}/>
      </View>

    </View>
  );
}
const styles=StyleSheet.create({
container:{
  padding:20,
},
tinyLogo:{
  alignItems:'center',
  width:50,
  height:50,
},
heading:{
  alignItems:'center',
  paddingTop:90,
  //paddingLeft:125,
  paddingBottom:40,
  //backgroundColor:'blue',
},
inputArea:{
 // borderWidth: 1,
  //borderRadius: 3,
  //borderColor: '#ddd',
  //borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 1,
  shadowRadius: 2,
  elevation: 4,
  //marginLeft: 1,
 // marginRight: 5,
  marginTop: 10,
  padding:20,
  // shadowOffset:{  width: 50,  height: 10,  },
  // shadowColor: 'black',
  // shadowOpacity: 5.0,
  // shadowRadius:2,
  // borderColor:'grey',
  //borderWidth:2,
},
inputText:{
  borderBottomColor:'grey',
  borderEndWidth:5,
},
});
export default YourApp;