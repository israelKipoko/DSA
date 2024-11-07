import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native'

export function OTPInput() {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setValue(text)}
            value={value}
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
        width: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        color: '#000', //input text color
        paddingHorizontal: 12
      },
    });
    
    export default OTPInput;
