import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FloatingLabelInput from '../../components/FloatingLabelInput'
import LineOrLine from '../../components/LineOrLine'
import CustomButton from '../../components/CustomButton'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-full flex-1 flex-col items-center ">
      {/* Logo */}
      <View className="w-full pl-4">
        <View className=" h-9 w-9 rounded-full bg-cyan-900"></View>
      </View>

      {/* Text inputs */}
      <View className="mt-20 mb-10">
        <FloatingLabelInput label="Email" />
        <FloatingLabelInput label="Password" />
        {/* Forgot password */}
        <Text className="text-blue-600">Forgot password?</Text>
      </View>

      {/* Sign in button */}
      <CustomButton
        title="Sing in"
        containerStyles={styles.customButton}
        handlePress={() => console.log("Apple")}
      />

      <LineOrLine />

      {/* Other auth method */}
      <View className="flex-col gap-5">
        <CustomButton
          title="Apple"
          containerStyles={styles.customButton}
          handlePress={() => console.log("Apple")}
        />
        <CustomButton
          title="Google"
          containerStyles={styles.customButton}
          handlePress={() => console.log("Google")}
        />

      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=> navigation.navigate("SignUp1")}>
        <Text className="text-blue-600 my-6">Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#395886",
    width: 300
  }
})