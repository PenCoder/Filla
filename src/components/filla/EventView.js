import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Card } from 'native-base';

export default class EventView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View>
                <Card style={{flex: 1}}>
                    <Text>Pop Here!!!</Text>
                </Card>
            </View>
        )
    }
}