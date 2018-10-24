/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Image, TextInput, Alert, Button, ScrollView, FlatList } from 'react-native';

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
  _onPressButton() {
    Alert.alert('You tabed the button')
  }
  render() {
    let pic = {
      uri: 'https://wx2.sinaimg.cn/mw690/5fe93731gy1fw98zcemqlj20ku0ku76e.jpg'
    };
    return (
      <View style={styles.container}>
        <Blink text='bling bling' style={styles.hello} />
        <ScrollView style={{ marginBottom: 50 }}>
          <Text style={styles.hello}>Hello World!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Image source={pic} style={{ width: 190, height: 200 }} />
          <FlatList
            data={[
              { key: 'java' },
              { key: '计算机网络' },
              { key: '数据机构和算法' },
              { key: '数据库' },
              { key: 'Android' },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
          <Greeting name='liuqiang' />
          <View style={{ height: 50, flexDirection: 'row' }}>
            <View style={{ flex: 1, height: 50, backgroundColor: '#ff0000' }}></View>
            <View style={{ flex: 2, height: 50, backgroundColor: '#00ff00' }}></View>
          </View>
          <TextInput
            style={{ height: 40, width: 200, flexDirection: 'row' }}
            placeholder='写点什么吧...'
          /* onChangeText={Alert.alert("123")}*/
          ></TextInput>
          <Button
            title='提交'
            onPress={this._onPressButton}
            style={{ marginBottom: 50, }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    color: '#ff0000',
    fontWeight: 'bold',
    textAlign: 'center',
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
  item: {
    textAlign: 'center',
    color: '#333333',
    padding: 10,
    fontSize: 20,
    marginBottom: 5,
  },
});
