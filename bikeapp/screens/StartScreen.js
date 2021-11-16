import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Text} from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>WATCHLY</Header>
      <Paragraph>
        I got players with bad watches – they can’t tell midnight from noon.
        {'\n'}
        <Text style={{fontWeight: 'bold', color: '#555'}}>~Casey Stengel~</Text>
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </Background>
  );
}
