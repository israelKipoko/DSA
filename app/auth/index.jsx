import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';
import OTP from './OTP';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <Stack.Navigator  initialRouteName="Welcome">
         <Stack.Screen name="Welcome" component={Welcome} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="SignIn" component={SignIn}  options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SignUp1" component={SignUp1}  options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SignUp2" component={SignUp2}  options={{
            headerShown: false,
          }} />
           <Stack.Screen name="SignUp3" component={SignUp3}  options={{
            headerShown: false,
          }} />
          <Stack.Screen name="OTP" component={OTP}  options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    );
  }
  function Navigation() {
    return (
      // <NavigationContainer>
        <AuthStack />
      /* </NavigationContainer> */
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