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
import { TabNavigator, } from 'react-navigation'

import AppMovie from './AppMovie';
import AppDoor from './AppDoor';
import AppDoor1 from './AppDoor1';
import AppDoor2 from './AppDoor2';

export default Tab = TabNavigator({
  AppMovie: {
    screen: AppMovie,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_main1.png')}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
      ),
    },
  },
  AppDoor: {
    screen: AppDoor,
    navigationOptions: {
      tabBarLabel: '分类',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_main2.png')}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
      ),
    },
  },
  AppDoor1: {
    screen: AppDoor1,
    navigationOptions: {
      tabBarLabel: '书架',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_main3.png')}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
      ),
    },
  },
  AppDoor2: {
    screen: AppDoor2,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/ic_main4.png')}
          style={[{ height: 24, width: 24 }, { tintColor: tintColor }]} />
      ),
    },
  },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    backBehavior: "none",

    tabBarOptions: {
      upperCaseLabel: false,
      showIcon: true,
      showLabel: true,
      activeTintColor: '#eb3695',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
        height: 55,
      },
      indicatorStyle: {
        height: 0,
      },
      labelStyle: {
        fontSize: 13,
        marginTop: -5,
        marginBottom: 5,
      },
      iconStyle: {
        marginBottom: 5,
      },
    },
  },
);