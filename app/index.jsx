import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Auth from './auth/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

// function Navigation() {
//     return (
//      <Auth />
//     );
//   }
export default function index() {
    return (
      <Auth />
      );
}

const styles = StyleSheet.create({})