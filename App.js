/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { showText: true }
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText }
      });
    }, 1000)
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    )
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://wx2.sinaimg.cn/mw690/5fe93731gy1fw98zcemqlj20ku0ku76e.jpg'
    };
    return (
      <View style={styles.container}>
        <Blink text='bling bling' />
        <Text style={styles.hello}>Hello World!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{ width: 190, height: 200 }} />
        <Greeting name='liuqiang' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
