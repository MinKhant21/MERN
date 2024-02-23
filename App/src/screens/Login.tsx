import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Login = () => {

  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  const HandleLogin = async() => {
    
  }
  return (
    <SafeAreaView>
      <View className="flex    justify-center text-center  h-screen">
        <View className=" mx-10 h-1/2 ">
          <Text className="text-center text-3xl font-bold font-serif">
            Welcome!
          </Text>
          <Text className="text-center mt-2">Sign in to continue</Text>
          <View className="mt-10">
            <View className="flex flex-row  border bg-gray-100 rounded-3xl p-3  border-b-red-500 space-x-4">
              <FontAwesome5 name={"user"} size={15} className="" />
              <TextInput className=""   onChangeText={e=>setEmail(e)}  placeholder="Enter Your Email" />
            </View>
            <View className=" mt-8 flex flex-row  border bg-gray-100 rounded-3xl p-3  border-b-red-500 space-x-4">
              <FontAwesome5 name={"eye"} size={15} className="" />
              <TextInput
                onChangeText={e=>setPassword(e)}
                placeholder="Enter Your Password"
                secureTextEntry={true}
              />
            </View>
            <Text className="text-right m-3">Forget Password ?</Text>
          </View>
          <View className="mt-10 flex justify-center items-center">
            <TouchableOpacity className=" w-1/2  " onPress={HandleLogin}>
              <View className=" p-3 bg-red-500 rounded-full">
                <Text className="text-center text-white font-semibold">
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row text-center items-center justify-center space-x-2">
          <Text className="text-center font-bold">New User? </Text>
          <Text className="text-red-500">Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
