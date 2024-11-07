import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import Steps from '../../components/Steps'
import OTPInput from './components/OtpInput'

export default function OTP() {

    return (
        <SafeAreaView className="h-full flex-1 flex-col items-center ">
            {/* Logo */}
            <View className="w-full pl-4">
                <View className=" h-9 w-9 rounded-full bg-cyan-900"></View>
            </View>

            <Text className="text-blue-600 font-bold text-2xl">Sign Up</Text>

            {/* Steps */}
            <View className="my-8">
                <Steps current={4} />
            </View>

            {/* OTP inputs */}
            <View className=" mb-10 flex flex-row gap-8">
              <OTPInput />
              <OTPInput />
              <OTPInput />
              <OTPInput />
            </View>

            {/* Verify button */}
            <CustomButton
                title="Verify"
                containerStyles={styles.customButton}
                handlePress={()=>{}}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#2563eb",
        width: 300
    }
})