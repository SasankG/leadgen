import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, Animated } from 'react-native';
import { createStackNavigator} from 'react-navigation';
// import screens and components
import Logins from "./app/components/Login/Login";
import HomeScreen from "./app/components/Home/Home";
import SignUp from "./app/components/Signup/Signup";
import ChatRoom from "./app/components/Home/ChatRoom";
import AddTask from "./app/components/TaskCreate/Create";
//Navigator will act as toggle between screen components and house all of the screens

const Nav  = createStackNavigator({
  HomeLogin: {
    screen: Logins,
    navigationOptions: () => ({
      title: `Log In`,
      headerBackTitle: null
    }),
  },
  HomeMain: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'LeadGen - Home',
      headerBackTitle: null,
      headerLeft: null,
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      title: 'LeadGen - Sign Up',
      headerBackTitle: null
    }),
  },
  ChatRooms: {
    screen: ChatRoom,
    navigationOptions: () => ({
      title: 'Chat Room',
      headerBackTitle: null,
    }),
  },
  Task: {
    screen: AddTask,
    navigationOptions: () => ({
      title: 'Task Form',
      headerBackTitle: null,
    }),
  }

},{
  navigationOptions: {
    header: false,
  }
});

export default class App extends Component {
  render(){
    return(
      <Nav/>
    )
  }
}