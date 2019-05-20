import React from 'react';
import { View, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation';

class Jobs extends React.Component{
    render() {
        return(
            <View>
                <Text>Jobs</Text>
            </View>
        )
    }
};

const JobsStack = createStackNavigator(
    {
        Jobs: {
            screen: Jobs,
            navigationOptions: {header: null}
        }
    }
);

export default JobsStack;