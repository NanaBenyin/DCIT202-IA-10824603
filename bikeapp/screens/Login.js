import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { setCustomText } from 'react-native-global-props';

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHRocm93aW5nJTIwYSUyMHdhdGNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        }}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Watchly</Text>
        <Text style={{textAlign:"center", color:"#fff", fontSize:15}}>Welcome to watchly.world.com  {'\n'}
        Where you find the best fit for your wrist!</Text>
      </ImageBackground>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          padding: 10,
          paddingHorizontal: 95,
          marginBottom: 10,
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          backgroundColor: '#fff',
        }}>
        <Text style={{ paddingLeft: 10, color: '#000', fontWeight: 500, fontSize:20 }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 10,
            fontWeight: '700',
            color: 'white',
          }}>
          Don't have an account?{' '}
          <Text style={{ color: '#f0b88d', fontWeight: 'bold' }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 500,
    height: 1000,
  },
  text: {
    color: 'white',
    fontSize: 50,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
});
