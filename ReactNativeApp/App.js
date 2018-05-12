/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Ionicons} from 'react-native-vector-icons/Ionicons'; // Version can be specified in package.json
import {TabNavigator, TabBarBottom} from 'react-navigation'; // Version can be specified in package.json
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Switch, Body } from 'native-base';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import {Hoshi} from 'react-native-textinput-effects';
import { RunNumber, Cloudy } from '@cloudy-db/bundle';
import {
    Platform,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Button,
    Alert
} from 'react-native';


class DashboardScreen extends React.Component {
    render() {
        return (
            <View>
            </View>
        );
    }
}

class ActivityScreen extends React.Component {

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem button onPress={() => alert("hi")}>
                            <Icon active name="ios-cash" />
                            <Text>
                                Amount
                            </Text>
                            <Right>
                                <Text>240</Text>
                            </Right>
                        </CardItem>
                        <CardItem button onPress={() => alert("hi")}>
                            <Icon active name="logo-usd" />
                            <Text>Currency</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("hi")}>
                            <Icon active name="ios-person" />
                            <Text>Paid By</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("hi")}>
                            <Icon active name="md-calendar" />
                            <Text>Date</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("hi")}>
                            <Icon active name="md-chatboxes" />
                            <Text>comment</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}


class BillScreen extends React.Component {
    state = {
        amount: '',
        currency: '',
        paidBy: '',
        date: '',
        comment: '',
    }
    getAmount = (text) => {
        this.setState({amount: text})
    }
    getCurrency = (text) => {
        this.setState({currency: text})
    }
    getPaidBy = (text) => {
        this.setState({paidBy: text})
    }
    getDate = (text) => {
        this.setState({date: text})
    }
    getComment = (text) => {
        this.setState({comment: text})
    }
    submit = (amount, currency, paidBy, date, comment) => {
        alert('amount: ' + amount + ' currency: ' + currency + ' paidBy: ' + paidBy + ' date: ' + date + ' comment: ' + comment)
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
                        onChangeText={this.getAmount}
                        onSubmitEditing={() => this.currencyInput.focus()}
                    />
                    <Hoshi
                        style={textfield.input}
                        label={'Currency'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={this.getCurrency}
                        ref={(input) => this.currencyInput = input}
                        onSubmitEditing={() => this.paidByInput.focus()}
                    />
                    <Hoshi
                        style={textfield.input}
                        label={'Paid By'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={this.getPaidBy}
                        ref={(input) => this.paidByInput = input}
                        onSubmitEditing={() => this.dateInput.focus()}
                    />
                    <Hoshi
                        style={textfield.input}
                        label={'Date (DD-MM-YYYY)'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={this.getDate}
                        ref={(input) => this.dateInput = input}
                        onSubmitEditing={() => this.commentInput.focus()}
                    />

                    <Hoshi
                        style={textfield.input}
                        label={'Comment'}
                        maskColor={'#F9F7F6'}
                        borderColor={'#7ac1ba'}
                        onChangeText={this.getComment}
                        ref={(input) => this.commentInput = input}
                    />

                    <TouchableOpacity
                        style={textfield.buttonContainer}
                        onPress={
                            () => this.submit(this.state.amount, this.state.currency, this.state.paidBy, this.state.date, this.state.comment)
                        }>
                        <Text style={textfield.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        )
    }
}

class ManageScreen extends React.Component {
    state = {
        'namespace': undefined
    }

    componentDidMount = () => AsyncStorage.getItem('namespace'). then((value) => this.setState = {
        'namespace': value
    })
    render() {
        return (
            <View style={[textfield.card1]}>
                {this.state.namespace ? (
                    <View>
                        <Text style={styles.black}>
                            You have joined a network already
                        </Text>
                        <Text style={styles.red}>
                            {this.state.namespace}
                        </Text>
                    </View>
                ):(
                    <View>
                        <Text style={styles.black}>
                            You have not joined a network yet
                        </Text>
                        <Text style={styles.red}>
                            Swipe the tab bar to "Create" or "Join" to configure your network
                        </Text>
                    </View>
                )}

                <Button style={styles.button}
                    title="Reset all configuration"
                    onPress={() => this.resetAll}/>
            </View>
        );
    }
}


class CreateScreen extends React.Component {
    state = {
        'namespace': undefined,
        'result': undefined
    }

    getNameSpace = (text) => {
        this.setState({'namespace': text})
    }
    storeState = () => {
        var text = this.state.namespace
        AsyncStorage.setItem('namespace': text)
    }

    render() {
        return (
            <View style={[textfield.card1]}>
                <Hoshi
                    style={textfield.input}
                    label={'Network namespace'}
                    maskColor={'#F9F7F6'}
                    borderColor={'#7ac1ba'}
                    onChangeText={this.getNameSpace}/>

                <Button
                    title="Create the network"
                    onPress={() => {
                        this.storeState
                        Alert.alert("Namespace: \""+this.state.namespace+"\" has been configured")}}
                        style={styles.container}/>
            </View>
        );
    }
}

class JoinScreen extends React.Component {

    state = {
        'namespace': undefined,
        'result': undefined
    }

    getNameSpace = (text) => {
        this.setState({'namespace': text})
    }
    storeState = () => {
        var text = this.state.namespace
        AsyncStorage.setItem('namespace': text)
    }

    render() {
        return (
            <View style={[textfield.card1]}>
                <Hoshi
                    style={textfield.input}
                    label={'Network namespace'}
                    maskColor={'#F9F7F6'}
                    borderColor={'#7ac1ba'}
                    onChangeText={this.getNameSpace}/>

                <Button
                    title="Join the network"
                    onPress={() => {
                        this.storeState
                        Alert.alert("Namespace: \""+this.state.namespace+"\" has been configured")}}
                        style={styles.container}/>
            </View>
        );
    }
}

export default TabNavigator(
    {
        Dashboard: {screen: DashboardScreen},
        Activity: {screen: ActivityScreen},
        Bill: {screen: BillScreen},
        Manage: {screen: ManageScreen},
        Create: {screen: CreateScreen},
        Join: {screen: JoinScreen},
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'ios-clipboard') {
                    iconName = "ios-create";
                } else if (routeName === 'Activity') {
                    iconName = "ios-calendar";
                } else if (routeName === 'Bill') {
                    iconName = "ios-cash";
                } else if (routeName === 'setting') {
                    iconName = "ios-settings"
                }
                // <MaterialIcons name="icon-name" size={20} color="#4F8EF7" />
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={20} color="#4F8EF7"/>;
            },
        }),
        //tabBarComponent: TabBarBottom,
        //tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'white',
            scrollEnabled: true,
        },
        animationEnabled: true,
        swipeEnabled: true,
    },
);

let styles = {
    scroll: {
        backgroundColor: '#E8EAF6',
    },

    container: {
        margin: 2,
        marginTop: 24,
        padding: 50,
    },

    contentContainer: {
        padding: 8,
        padding: 50,
    },
    black: {
        padding: 75,
        textAlign: 'center',
        fontStyle: 'normal',
        fontSize: 20,

    },
    red: {
        padding: 75,
        textAlign: 'center',
        fontStyle: 'normal',
        fontSize: 20,
        color: 'red'
    },
    button: {
        padding: 100,
        margin: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#406E9F',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

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
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
