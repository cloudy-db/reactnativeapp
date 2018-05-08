/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {MaterialIcons} from 'react-native-vector-icons/MaterialIcons'; // Version can be specified in package.json
import {TabNavigator, TabBarBottom} from 'react-navigation'; // Version can be specified in package.json

import {Hoshi} from 'react-native-textinput-effects';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

class DashboardScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class ActivityScreen extends React.Component {
    render() {
        return (
            <ScrollView>
            </ScrollView>
        )
    }
}


class NewBillScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            currency: '',
            paidBy: '',
            comment: '',
        };
    }

    render() {
        return (
                <ScrollView
                    style={textfield.container}
                    contentContainerStyle={textfield.content}
                >
                    <View style={[textfield.card1]}>
                        <Text style={textfield.title}>New Bill</Text>
                        <Hoshi
                            style={textfield.input}
                            label={'Amount'}
                            maskColor={'#F9F7F6'}
                            borderColor={'#7ac1ba'}
                        />
                        <Hoshi
                            style={textfield.input}
                            label={'Currency'}
                            maskColor={'#F9F7F6'}
                            borderColor={'#7ac1ba'}
                        />
                        <Hoshi
                            style={textfield.input}
                            label={'Paid By'}
                            maskColor={'#F9F7F6'}
                            borderColor={'#7ac1ba'}
                        />
                        <Hoshi
                            style={textfield.input}
                            label={'Comment'}
                            maskColor={'#F9F7F6'}
                            borderColor={'#7ac1ba'}
                        />
                        <TouchableOpacity style={textfield.buttonContainer}>
                            <Text style={textfield.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        )
    }
}

export default TabNavigator(
    {
        Dashboard: {screen: DashboardScreen},
        Activity: {screen: ActivityScreen},
        NewBill: {screen: NewBillScreen}
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
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
                return <MaterialIcons name={iconName} size={20} color="#4F8EF7"/>;
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

let styles = {
    scroll: {
        backgroundColor: '#E8EAF6',
    },

    container: {
        margin: 8,
        marginTop: 24
    },

    contentContainer: {
        padding: 8,
    },
};

const textfield = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        padding: 20,
        backgroundColor: 'white',
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,
    },
    card1: {
        paddingVertical: 16,
    },
    card2: {
        padding: 16,
    },
    input: {
        marginTop: 4,
        marginBottom: 10,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#404d5b',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
