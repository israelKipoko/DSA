import React, { useState, useRef } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

const FloatingLabelInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const animatedLabel = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabel, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
      Animated.timing(animatedLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#000'],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>
        {label}
      </Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholderTextColor="#ffffff" // Placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: 300,
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
    borderRadius: 8,
    fontSize: 16,
    color: '#ffffff', //input text color
    backgroundColor: '#395886',
    paddingHorizontal: 12
  },
});

export default FloatingLabelInput;