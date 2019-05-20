import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Card, View, CardItem, Body, Text, Badge} from 'native-base';
import { createStackNavigator } from 'react-navigation';

const ConsultantComponent = () => {
    <TouchableOpacity>
        <Card style={styles.card}>
            <CardItem header>
                <Image source={{uri: profile.PP}}
                        style={{width: 160, height: 140}}/>
                <Text>{profile.Name}</Text>
            </CardItem>
            <CardItem cardBody>
                <Body>
                    <Text></Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Badge>
                    <Icon name="" />
                </Badge>
                <Badge>
                    <Icon name="" />
                </Badge>
            </CardItem>
        </Card>
    </TouchableOpacity>
}

class Consultants extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render(){
        return (
            <View>
                <ScrollView 
                    contentContainerStyle={styles.scroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    {

                    }
                </ScrollView>
            </View>
        )
    }
};
const ConsultantsStack = createStackNavigator(
    {
        Consultants: {
            screen: Consultants,
            navigationOptions: {header: null}
        }
    }
)

const styles = StyleSheet.create({
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    }
});

export default ConsultantsStack;