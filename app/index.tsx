import React from "react";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image } from "react-native";
import { images } from "@/constants";
import { Location } from './../node_modules/comment-json/index.d';
import CustomButton from "@/components/CustomBotton";
import { useRouter } from "expo-router";

export default function index() {
    const ruter = useRouter()
  return (   
  <Redirect href={"/(tabs)/home"} />
    // <SafeAreaView className="bg-gray-900 h-full">
    //     <ScrollView contentContainerStyle={{ height: "100%" }}>
    //         <View className="w-full flex justify-center items-center h-full px-4">
    //             <Image 
    //             source={images.logo} 
    //             className="h-[84px]" 
    //             resizeMode="contain"
    //             />
    //             <Image 
    //             source={images.cards} 
    //             className="max-w-[380px] w-full h-[300px]" 
    //             resizeMode="contain"
    //             />
    //             <View className="relative mt-5">
    //                 <Text className="text-3xl text-white font-bold text-center">
    //                     Lorem ipsum, dolor sit {"\n"} amet {""}
    //                     <Text className=" text-orange-500">Aurashop.</Text>
    //                 </Text>
    //             <Image 
    //             source={images.path} 
    //             className="w-[150px] h-[15px] adsolute -bottom-4 -right-2" 
    //             resizeMode="contain"
    //             />
    //             </View>
    //             <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et sed dolor ipsum voluptatum animi.
    //             </Text>
    //             <CustomButton
    //             title="Continue with Email"
    //             handlePress={() => { 
    //                 router.push('/(auth)/login')
    //                 }}
    //             containerStyles="w-full mt-7"
    //             />
    //         </View>
    //     </ScrollView>
    // </SafeAreaView>

);
}