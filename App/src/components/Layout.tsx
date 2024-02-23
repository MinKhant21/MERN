//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Home from '../screens/Home';

// create a component
const Layout = () => {
     return (
          <SafeAreaView>
               
               <Home/>
          </SafeAreaView>
     );
};



//make this component available to the app
export default Layout;
