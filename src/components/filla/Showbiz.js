import React from 'react';
import {ScrollView} from 'react-native';
import { View, Card, CardItem } from 'native-base';
import { createStackNavigator, withNavigation } from 'react-navigation';

const ShowbizComponent = () => {
    return (
        <View>
            <Card>
                <CardItem header>
                    <Title>Title</Title>
                </CardItem>
            </Card>
        </View>
    );
};

class Showbiz extends React.Component {
    render(){
        return (
            <ScrollView
                // contentContainerStyle={styles.scroll}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>

            </ScrollView>
        )
    }
};

const ShowbizStack = createStackNavigator(
    {
        Showbiz: {
            screen: Showbiz,
            navigationOptions: {header: null}
        }
    }
);

export default ShowbizStack;