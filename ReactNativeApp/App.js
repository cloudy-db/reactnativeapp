/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>*/
        <BottomNavigation
            labelColor="white"
            rippleColor="white"
            style={{
                height: 56,
                elevation: 8,
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0
            }}
            onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
        >
            <Tab
                barBackgroundColor="#37474F"
                label="dashboard"
                icon={<Icon size={24} color="white" name="dashboard" />}
            />
            <Tab
                barBackgroundColor="#37474F"
                label="Music"
                icon={<Icon size={24} color="white" name="music-note" />}
            />
            <Tab
                barBackgroundColor="#37474F"
                label="Books"
                icon={<Icon size={24} color="white" name="book" />}
            />
        </BottomNavigation>
    );
  }
}
class MyComponent extends Component {
    render() {
        return (
            <BottomNavigation
                labelColor="white"
                rippleColor="white"
                style={{
                    height: 56,
                    elevation: 8,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
            >
                <Tab
                    barBackgroundColor="#37474F"
                    label="Movies & TV"
                    icon={<Icon size={24} color="white" name="tv" />}
                />
                <Tab
                    barBackgroundColor="#00796B"
                    label="Music"
                    icon={<Icon size={24} color="white" name="music-note" />}
                />
                <Tab
                    barBackgroundColor="#5D4037"
                    label="Books"
                    icon={<Icon size={24} color="white" name="book" />}
                />
                <Tab
                    barBackgroundColor="#3E2723"
                    label="Newsstand"
                    icon={<Icon size={24} color="white" name="newspaper" />}
                />
            </BottomNavigation>
        )
    }
}

const styles = StyleSheet.create({
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
