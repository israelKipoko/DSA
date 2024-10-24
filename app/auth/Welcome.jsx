import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="py-6 px-4 h-full flex-1 ">
        <View className="w-[100vw] h-[100vh] bg-primary-100 opacity-[0.55]">
         </View>
        <ScrollView className=" "
            contentContainerStyle={{
            height: "100%",}}>
            <View className=" w-full my-auto flex justify-between items-center h-[80%] py-6 px-4">
                <View className=" my-6">
                    <Text className="font-bold text-center">
                        Logo
                    </Text>
                </View>
                <View className="my-">
                    <Text className="font-bold text-center">
                    Catch Phrase
                    </Text>
                </View>
                <CustomButton
                title="Commencer"
                handlePress={() => navigation.navigate('Signup')}
                containerStyles="w-full font-bold rounded-full bg-primary-200"/>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})