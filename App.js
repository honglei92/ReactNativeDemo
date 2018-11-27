/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, Alert, Button, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import AppMovie from './app/AppMovie';
import AppDoor from './app/AppDoor';
import AppDoor1 from './app/AppDoor1';
import AppDoor2 from './app/AppDoor2';

export default class Main extends Component<Props>{
  render() {
    return (
      <TabContainer />
    );
  }
}
const TabContainer = createBottomTabNavigator(
  {
    首页: createStackNavigator({
      screen: AppMovie,
    },
      {
        headerMode: 'screen',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#6699ff',
          },
          title: '首页',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        },
      },
    ),
    分类: createStackNavigator({
      screen: AppDoor,
    },
      {
        headerMode: 'screen',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#6699ff',
          },
          title: '分类',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        },
      },
    ),
    书架: createStackNavigator({
      screen: AppDoor,
    },
      {
        headerMode: 'screen',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#6699ff',
          },
          title: '书架',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        },
      },
    ),
    我的: createStackNavigator({
      screen: AppDoor,
    },
      {
        headerMode: 'screen',
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
        navigationOptions: {
          headerStyle: {
            backgroundColor: '#6699ff',
          },
          title: '我的',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        },
      },
    ),
  }, {
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: '#5599ff',
      style: {
        backgroundColor: '#f8f8f8',
        height: 55,
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      },
      labelStyle: {
        fontSize: 12
      },
    },

    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === '首页') {
          if (focused) {
            return <Image
              source={require('./images/ic_main1.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          } else {
            return <Image
              source={require('./images/ic_main1_selected.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          }
        } else if (routeName === '分类') {
          if (focused) {
            return <Image
              source={require('./images/ic_main2.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          } else {
            return <Image
              source={require('./images/ic_main2_selected.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          }
        } else if (routeName === '书架') {
          if (focused) {
            return <Image
              source={require('./images/ic_main3.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          } else {
            return <Image
              source={require('./images/ic_main3_selected.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          }
        } else if (routeName === '我的') {
          if (focused) {
            return <Image
              source={require('./images/ic_main4.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          } else {
            return <Image
              source={require('./images/ic_main4_selected.png')}
              style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
          }
        }
      }
    })
  });
module.exports = Main;

// export default Tab = TabNavigator({
//   AppMovie: {
//     screen: AppMovie,
//     navigationOptions: {
//       tabBarLabel: '首页',
//       tabBarIcon: ({ tintColor }) => (
//         <Image
//           source={require('./images/ic_main1.png')}
//           style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
//       ),
//     },
//   },
//   AppDoor: {
//     screen: AppDoor,
//     navigationOptions: {
//       tabBarLabel: '分类',
//       tabBarIcon: ({ tintColor }) => (
//         <Image
//           source={require('./images/ic_main2.png')}
//           style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
//       ),
//     },
//   },
//   AppDoor1: {
//     screen: AppDoor1,
//     navigationOptions: {
//       tabBarLabel: '书架',
//       tabBarIcon: ({ tintColor }) => (
//         <Image
//           source={require('./images/ic_main3.png')}
//           style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
//       ),
//     },
//   },
//   AppDoor2: {
//     screen: AppDoor2,
//     navigationOptions: {
//       tabBarLabel: '我的',
//       tabBarIcon: ({ tintColor }) => (
//         <Image
//           source={require('./images/ic_main4.png')}
//           style={[{ height: 22, width: 22 }, { tintColor: tintColor }]} />
//       ),
//     },
//   },
// }, {
//     tabBarPosition: 'bottom',
//     animationEnabled: true,
//     swipeEnabled: true,
//     backBehavior: "none",

//     tabBarOptions: {
//       upperCaseLabel: false,
//       showIcon: true,
//       showLabel: true,
//       activeTintColor: '#eb3695',
//       inactiveTintColor: 'gray',
//       style: {
//         backgroundColor: 'white',
//         height: 60,
//       },
//       indicatorStyle: {
//         height: 0,
//       },
//       labelStyle: {
//         fontSize: 13,
//         marginTop:-5,
//         marginBottom:-3
//       },
//       iconStyle: {
//         marginBottom:5,
//       },
//     },
//   },
// );