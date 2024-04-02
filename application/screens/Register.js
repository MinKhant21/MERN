import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";

export default function Register() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className=" text-xl font-bold ">Register</Text>
      <View className=" flex flex-col gap-5 mt-10 justify-center items-center">
        <TextInput
          className=" border-b-red-300 w-[250px] bg-white"
          left={<TextInput.Icon icon="account" />}
          placeholder="Enter Your User Name"
        />
        <TextInput
          className=" border-b-red-300 w-[250px] bg-white"
          left={<TextInput.Icon icon="email" />}
          placeholder="Enter Your Email"
        />
        <TextInput
          className=" border-b-red-300 w-[250px] bg-white"
          secureTextEntry
          left={<TextInput.Icon icon="key" />}
          placeholder="Enter Your Password"
        />
      </View>

      <View className="flex flex-row gap-2 mt-2">
        <Text>Already have an account?</Text>
        <Text className="text-center font-bold text-purple-600">
          Login Here
        </Text>
      </View>

      <TouchableOpacity className=" px-5 py-4 bg-purple-400 w-[250px]  mt-9 rounded-2xl">
        <Text className="text-center font-bold text-white">Register</Text>
      </TouchableOpacity>
    </View>
  );
}
