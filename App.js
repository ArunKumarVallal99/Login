import React from 'react';
import { StyleSheet, StatusBar,Image,Text, TextInput, View, Button, ScrollView, SafeAreaView,Alert, TouchableOpacity } from 'react-native';

const YourApp = () => {
  
  return (
   <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       <ScrollView>
          <View style={styles.container}> 
            <View  style={styles.heading}>
              <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
              <Text style={{fontSize:40,color:'grey', paddingTop:10}}>LOGIN</Text>
            </View>

            <View style={styles.inputArea}>
              <Text style={styles.loginText}>Email</Text>

              <View style={styles.inputView}>
                  <TextInput style={styles.inputText}
                  keyboardType='email-address'
                  placeholder='example@mail.com'
                  textContentType="emailAddress"
                  underlineColorAndroid='grey'
                  autoFocus={true}/>
              </View>

              <Text style={styles.loginText}>Password</Text>

              <View style={styles.inputView}>
                  <TextInput style={styles.inputText}
                  keyboardType='visible-password'
                  placeholder='rVwTf8f1jhGkjt12sd'
                  textContentType='password'
                  secureTextEntry={true}
                  underlineColorAndroid='grey'/>
              </View>

              <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.button}
                  onPress={()=>Alert.alert('Please Wait')}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
              </View>

                {/* <Button
                style={styles.button}
                title="Login"
                color="green"
                onPress={() => Alert.alert('Please Wait')}/> */}

            </View>
            
            <View style={styles.userLogin}>
              <Text style={styles.user}>New User?</Text>
              <TouchableOpacity onPress={()=>Alert.alert('Redirecting to Register Page - Please Wait')}>             
                <Text style={styles.joinus}>Join US</Text>
              </TouchableOpacity>
            </View>
          
          </View>

        </ScrollView>
      </SafeAreaView>
  </>
  );
};

const styles=StyleSheet.create({
  container:{
    padding:20,
    //alignItems:'center',
    
  },
  tinyLogo:{
    alignItems:'center',
    width:50,
    height:50,
  },
  heading:{
    alignItems:'center',
    paddingTop:60,
    paddingBottom:20,
    //backgroundColor:'blue',
  },
  inputArea:{
    borderRadius:5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 100,
    shadowRadius: 2,
    elevation: 3,
    padding:20,
  },
  loginText:{
    fontSize:20,
    paddingBottom:5,
    marginRight:180,
  },
  inputView:{
    paddingBottom:20,
  },
  inputText:{
    //borderColor:'grey',
    //borderBottomWidth:1,
    flex:1,
    height:40,
  },
  userLogin:{
    padding:30,
    justifyContent:'center',
    flexDirection:'row',

  },
  buttonView:{
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    height:60,
    width:190,
    borderRadius:60,
    borderWidth:5,
    backgroundColor:'green',
    borderColor:'green',
    alignItems:"center",
    justifyContent:'center',
  },
  buttonText:{
    fontSize:20,
    color:'white',
  },
  user:{
    fontSize:17,
  },  
  joinus:{
    fontSize:17,
    color:'green',
  },
});
export default YourApp;