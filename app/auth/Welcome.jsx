import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import  "../../global.css"

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="h-full flex-1">
            <ScrollView className=" "
            contentContainerStyle={{
                height: "100%",}}>
                <View className="px-3">
                    <Text className="text-red-600">Logo</Text>
                    <View className="border border-cyan-900 h-9 w-9 bg-cyan-400"></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})