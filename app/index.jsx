import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Auth from './auth/index';

function Navigation() {
    return (
     <Auth />
    );
  }
export default function index() {
    return (
        <>
          <StatusBar style="light" />
          <Navigation />
        </>
      );
}

const styles = StyleSheet.create({})