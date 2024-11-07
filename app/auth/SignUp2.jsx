import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FloatingLabelInput from '../../components/FloatingLabelInput'
import LineOrLine from '../../components/LineOrLine'
import CustomButton from '../../components/CustomButton'
import Steps from '../../components/Steps'
import { useNavigation } from 'expo-router'

export default function SignUp2() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="h-full flex-1 flex-col items-center ">
            {/* Logo */}
            <View className="w-full pl-4">
                <View className=" h-9 w-9 rounded-full bg-cyan-900"></View>
            </View>

            <Text className="text-blue-600 font-bold text-2xl">Sign Up</Text>

            {/* Steps */}
            <View className="my-8">
                <Steps current={2} />
            </View>

            {/* Text inputs */}
            <View className=" mb-10">
                <FloatingLabelInput label="Nom" />
                <FloatingLabelInput label="Post-nom" />
                <FloatingLabelInput label="Prenom" />
                <FloatingLabelInput label="Addresse" />
            </View>

            {/* Confirm button */}
            <CustomButton
                title="Confirm"
                containerStyles={styles.confirmButton}
                handlePress={() => navigation.navigate("SignUp3")}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    confirmButton: {
        backgroundColor: "#2563eb",
        width: 300
    }
})