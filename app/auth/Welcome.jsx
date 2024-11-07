import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import "../../global.css"

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="h-full flex-1 flex-col items-center justify-between">
            {/* Logo */}
            <View className="w-full pl-4">
                <View className="border h-9 w-9 rounded-full bg-cyan-900"></View>
            </View>

            {/* Images placeholders*/}
            <View className="flex-row w-full justify-around">
                <View className="w-32 h-32 rounded-md bg-action-actionNormal"></View>
                <View className="w-32 h-32 rounded-md bg-action-actionNormal"></View>
                <View className="w-32 h-32 rounded-md bg-action-actionNormal"></View>
            </View>

            <Text>CATCH PHRASE</Text>

            <View className="grid place-items-center mb-20">
                <CustomButton
                    title="Get started"
                    containerStyles={styles.customButton}
                    handlePress={() => navigation.navigate("SignIn")} />
            
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#395886",
        width: 250
    }
})