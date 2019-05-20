import React from 'react';
import {Text} from 'native-base';
import { createStackNavigator } from 'react-navigation';

class Campus extends React.Component{
    render(){
        return (
            <Text>Campus</Text>
        )
    }
};

const CampusStack = createStackNavigator(
    {
        Campus: {
            screen: Campus,
            navigationOptions: {header: null}
        }
    }
);

export default CampusStack;