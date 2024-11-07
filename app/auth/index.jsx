import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Signup';
import Welcome from './Welcome';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <NavigationContainer>
      <Stack.Navigator  initialRouteName="Welcome">
         <Stack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false,
          }}/>
        <Stack.Screen name="Signup" component={Signup}  options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
      </NavigationContainer>

    );
  }
export default function Auth() {
    return (
        
          <AuthStack/>
      );
}

const styles = StyleSheet.create({})