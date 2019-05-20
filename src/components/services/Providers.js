import React from 'react';
import { View, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation';

class Providers extends React.Component{
    render(){
        return(
            <View>
                <Text>Provider</Text>
            </View>
        )
    }
};
const ProvidersStack = createStackNavigator(
    {
        Providers: {
            screen: Providers,
            navigationOptions: {
                header: null
            }
        }
    }
);
 export default ProvidersStack;