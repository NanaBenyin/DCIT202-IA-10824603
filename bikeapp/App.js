import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from 'react-native-paper'
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Recommend from './screens/Recommend';
import { theme } from './core/theme';
import {StartScreen} from './screens/StartScreen';
import{LoginScreen} from './screens/LoginScreen';
import{RegisterScreen} from './screens/RegisterScreen';
import{ResetPasswordScreen} from './screens/ResetPasswordScreen';
import {Dashboard} from './screens/Dashboard';

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
    <Provider theme={theme}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false }}
          // initialRouteName=""
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Recommend" component={Recommend} />
          <MainNavigator.Screen name="LoginScreen" component={LoginScreen} />
          <MainNavigator.Screen name="RegisterScreen" component={RegisterScreen} />
           <MainNavigator.Screen name="StartScreen" component={StartScreen} />
          <MainNavigator.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            <MainNavigator.Screen name="Dashboard" component={Dashboard} />
        </MainNavigator.Navigator>
      </NavigationContainer>
      </Provider>
    </View>
  );
}


