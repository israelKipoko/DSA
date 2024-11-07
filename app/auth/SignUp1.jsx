import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FloatingLabelInput from '../../components/FloatingLabelInput'
import LineOrLine from '../../components/LineOrLine'
import CustomButton from '../../components/CustomButton'
import Steps from '../../components/Steps'
import { useNavigation } from 'expo-router'

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-full flex-1 flex-col items-center ">
      {/* Logo */}
      <View className="w-full pl-4">
        <View className=" h-9 w-9 rounded-full bg-cyan-900"></View>
      </View>

      <Text className="text-blue-600 font-bold text-2xl">Sign Up</Text>

      {/* Steps */}
      <Steps current={1} />

      {/* Text inputs */}
      <View className=" mb-10">
        <FloatingLabelInput label="Email Or Phone number" />
        <FloatingLabelInput label="Password" />
        <FloatingLabelInput label="Confirm Password" />
      </View>

      {/* Confirm button */}
      <CustomButton
        title="Confirm"
        containerStyles={styles.confirmButton}
        handlePress={() => navigation.navigate("SignUp2")}
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

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#395886",
    width: 300
  },
  confirmButton: {
    backgroundColor: "#2563eb",
    width: 300
  }
})