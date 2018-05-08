/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class DashboardScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class ActivityScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

class NewBillScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

export default TabNavigator(
    {
        Dashboard: { screen: DashboardScreen },
        Activity: { screen: ActivityScreen },
        NewBill: {screen: NewBillScreen}
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Dashboard') {
                    iconName = "dashboard";
                } else if (routeName === 'Activity') {
                    iconName = "activity";
                } else if (routeName === 'NewBill') {
                    iconName = "bill";
                }
                // <MaterialIcons name="icon-name" size={20} color="#4F8EF7" />
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <MaterialIcons name={ iconName } size={20} color="#4F8EF7" />;
            },
        }),
        //tabBarComponent: TabBarBottom,
        //tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'white',
        },
        animationEnabled: true,
        swipeEnabled: true,
    }
);