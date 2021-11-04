import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Recommend from './screens/Recommend';
import Digital from './screens/Digital';
import Analogue from './screens/Analogue';
import { theme } from './core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './screens'


export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
    
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false }}
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Recommend" component={Recommend} />
          <MainNavigator.Screen name="Digital" component={Digital} />
          <MainNavigator.Screen name="Analogue" component={Analogue} />
          <MainNavigator.Screen name="StartScreen" component={StartScreen} />
          <MainNavigator.Screen name="LoginScreen" component={LoginScreen} />
          <MainNavigator.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          <MainNavigator.Screen name="Dashboard" component={Dashboard} />
          
        </MainNavigator.Navigator>
      </NavigationContainer>
      
    </View>
  );
}


