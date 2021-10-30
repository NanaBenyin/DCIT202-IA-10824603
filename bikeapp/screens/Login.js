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
import {
  widthPercentageToDP as width1,
  heightPercentageToDP as height1,
} from 'react-native-responsive-screen';

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        flex: 1,
        // paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{ alignItems: 'left', justifyContent: 'left' }}>
        <Text
          style={{
            color: '#333',
            fontSize: 25,
            fontWeight: 'bold',
            marginRight: 10,
          }}>
          Welcome to
        </Text>
        <Text style={{ color: '#fd9843', fontSize: 40, fontWeight: 'bold' }}>
          <Text style={{ color: '#e47112', fontWeight: 'bold' }}>watchly</Text>
          .world.org
        </Text>
      </View>
      <View style={styles.container1}>
        <Image
          source={require('./Images/watch-get-started.png')}
          style={{
            alignSelf: 'center',
            width: 200,
            height: 300,
            marginBottom: 100,
          }}
        />
      </View>

      <Text
        style={{
          color: '#333',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 17,
        }}>
        “Jewelry isn’t really my thing, but I’ve always got my eye on people’s
        watches.”{'\n'}
        <Text style={{ color: '#777', fontSize: 20, fontWeight: 'bold',}}>
          ~Clive Owen~
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          alignSelf: 'center',
          paddingVertical: 10,
          paddingHorizontal: 70,
          width: 290,
          marginTop: 30,
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          backgroundColor: '#fd9843',
        }}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 23,
          }}>
          Join us Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#ffa94d',
    height: height1('35%'),
    width: width1('74%'),
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 90,
    borderRadius: 500,
  },
});
