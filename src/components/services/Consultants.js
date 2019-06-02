import React from 'react';
import {StyleSheet, ScrollView, TouchableNativeFeedback} from 'react-native';
import {Container, Card, View, CardItem, Body, Text, Image, Badge, Icon} from 'native-base';
import { createStackNavigator } from 'react-navigation';

import ConsultantComponent from './ConsultantComponent';

import ContactsData from '../../data/people'


export default class Consultants extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            people: ContactsData.chatters
        }
    }
    async getPeopleData(){
        var uri = 'https://randomuser.me/api';
        var people = await fetch(uri)
                    .then(response => response.json())
        return people.results;
    }
    render(){
        return (
            <View>
                <ScrollView 
                    contentContainerStyle={styles.scroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    {
                        this.state.people.map((person, index) => 
                        <ConsultantComponent
                            person={person}
                            key={index} />
                        )
                    }
                </ScrollView>
            </View>
        )
    }
};
// const ConsultantsStack = createStackNavigator(
//     {
//         Consultants: {
//             screen: Consultants,
//             navigationOptions: {header: null}
//         }
//     }
// )

const styles = StyleSheet.create({
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 10,
        paddingTop:2,
        paddingLeft: 2,
        paddingRight: 2
    }
});

// export default ConsultantsStack;