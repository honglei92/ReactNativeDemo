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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }
  _onPressButton() {
    Alert.alert('You tabed the button')
  }
  componentDidMount() {
    return fetch('http://api.douban.com/v2/movie/top250?start=0&count=250')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.subjects,
        }, function () {
        });
      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container} >
        <ScrollView contentContainerStyle={{ flex: 1 }} style={{ marginBottom: 50 }}>
          <FlatList
            data={
              this.state.dataSource}
            renderItem={({ item }) =>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: item.images.small }}
                  style={styles.image}
                />
                <View style={{ flex: 2, flexDirection: 'column' }}>
                  <Text style={styles.item}>{item.title},{item.year}</Text>
                  <Text style={styles.item}>{item.original_title}</Text>
                </View>
              </View>}
            keyExtractor={(item, index) => item.id}
          />
          <Text style={styles.hello}>111111111111111111111111111111111111111111111111111111</Text>
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
    flex: 2,
    textAlign: 'center',
    color: '#333333',
    padding: 10,
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 20,
    padding: 10
  }
});
