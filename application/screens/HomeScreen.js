//import liraries
import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import {Searchbar} from 'react-native-paper'
// create a component
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mx-3">
      <Text className=" text-2xl font-extrabold my-3">Our Product</Text>
      <Searchbar
      placeholder="Search"
      className="bg-white my-5"
    />
      <ScrollView className=" space-y-2">
      <View className=" flex-row mx-1 gap-4">
        <View className="flex justify-center items-center space-y-2 bg-white rounded-2xl  pb-4" >
          <Image
            className= " w-44 h-40  rounded-2xl"
            source={require("../assets/11.jpeg")}
          />
          <Text className=" text-md text-blue-700 font-bold">
            Apple Iphone 11
          </Text>
          <Text className="text-xl text-blue-700 font-bold">$10,000</Text>
        </View>
        <View className="flex justify-center items-center space-y-2 bg-white  rounded-2xl pb-4">
          <Image
            className=" w-44 h-40 rounded-2xl"
            source={require("../assets/11.jpeg")}
          />
          <Text className=" text-md text-blue-700 font-bold">
            Apple Iphone 11
          </Text>
          <Text className="text-xl text-blue-700 font-bold">$10,000</Text>
        </View>
      </View>
      <View className=" flex-row mx-1 gap-4">
        <View className="flex justify-center items-center space-y-2 bg-white rounded-2xl pb-4">
          <Image
            className= " w-44 h-40 rounded-2xl "
            source={require("../assets/11.jpeg")}
          />
          <Text className=" text-md text-blue-700 font-bold">
            Apple Iphone 11
          </Text>
          <Text className="text-xl text-blue-700 font-bold">$10,000</Text>
        </View>
        <View className="flex justify-center items-center space-y-2 bg-white  rounded-2xl pb-4">
          <Image
            className=" w-44 h-40 rounded-2xl"
            source={require("../assets/11.jpeg")}
          />
          <Text className=" text-md text-blue-700 font-bold">
            Apple Iphone 11
          </Text>
          <Text className="text-xl text-blue-700 font-bold">$10,000</Text>
        </View>
      </View>
      <View className=" flex-row mx-1 gap-4">
        <View className="flex justify-center items-center space-y-2 bg-white rounded-2xl pb-4">
          <Image
            className= " w-44 h-40 rounded-2xl"
            source={require("../assets/11.jpeg")}
          />
          <Text className=" text-md text-blue-700 font-bold">
            Apple Iphone 11
          </Text>
          <Text className="text-xl text-blue-700 font-bold">$10,000</Text>
        </View>
        <View className="flex justify-center items-center space-y-2 bg-white  rounded-2xl pb-4">
          <Image
            className=" w-44 h-40 rounded-2xl"
            source={require("../assets/11.jpeg")}
          />
          <Text className=" text-md text-blue-700 font-bold">
            Apple Iphone 11
          </Text>
          <Text className="text-xl text-blue-700 font-bold">$10,000</Text>
        </View>
      </View>
      
      </ScrollView>
      
      
    </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default HomeScreen;
