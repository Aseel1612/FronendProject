import React, { Component } from 'react';

import { Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import Profile from './components/Profile'
import MyP from './components/MyProfile'
import G from './components/Guides'
import Intro from './components/Intro'

const Tab = createMaterialTopTabNavigator();
const bot = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function tour() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function ABOUT() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function hOTELbooking() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Hot </Text>
    </View>
  );
}
function carrenting() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function ProfileScreen({ route }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Profile!</Text>
      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>
    </View>
  );
}



class Main extends Component {

  render(){
  return (
    
    <NavigationContainer >
   <Drawer.Navigator>
         <Drawer.Screen name="Home" component={Intro} />
        
        <Drawer.Screen  name="profile" component={Profile} />
        <Drawer.Screen name="Tours" component={MyP} />
 <Drawer.Screen name="Add Location" component={G} />

 </Drawer.Navigator>
    </NavigationContainer>

  );
      }}
export default Main;        