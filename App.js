import React, { Component } from 'react';

import { Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tours from './Components/Tours'
import Intro from './Components/Introduction'
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
   <Drawer.Navigator  drawerContentOptions={{
    activeTintColor: '#e91e63',}}    overlayColor="transparent">
                  <Drawer.Screen name="Home" component={Intro}/>
  
         <Drawer.Screen name="Discover" component={Tours}/>
 </Drawer.Navigator>
    </NavigationContainer>

  );
      }}
export default Main;        