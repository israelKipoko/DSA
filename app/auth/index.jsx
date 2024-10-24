import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Signup';
import Welcome from './Welcome';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <Stack.Navigator  initialRouteName="">
         <Stack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false,
          }}/>
        <Stack.Screen name="Signup" component={Signup}  options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    );
  }
  function Navigation() {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }
export default function Auth() {
    return (
        <>
          
    
          <Navigation />
        </>
      );
}

const styles = StyleSheet.create({})