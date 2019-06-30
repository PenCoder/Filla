import React from 'react';
import {StyleSheet} from 'react-native';
import { View, Text, Card, CardItem, Body } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { Tile, Avatar } from 'react-native-elements';

export default class Jobs extends React.Component{
    render() {
        return(
            <View>
                <Card>
                    <CardItem header>
                        <Avatar 
                            rounded={false}
                            source={require('../../data/pics/copy.png')}
                            size={120}
                        />
                        <Body>
                            <CardItem>
                                <Text style={styles.header}>Global Copy Firm</Text>
                            </CardItem>
                            <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Position:</Text>
                                <Text style={styles.text2}>Senior Copy Filer</Text>
                            </CardItem>
                            {/* <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Vacancies:</Text>
                                <Text style={styles.text2}>5</Text>
                            </CardItem> */}
                            <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Date Posted:</Text>
                                <Text style={styles.text2}>23/05/19</Text>
                            </CardItem>
                            <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Closing Date:</Text>
                                <Text style={styles.text2}>23/06/19</Text>
                            </CardItem>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Avatar 
                            rounded={false}
                            source={require('../../data/pics/copy.png')}
                            size={120}
                        />
                        <Body>
                            <CardItem>
                                <Text style={styles.header}>Global Copy Firm</Text>
                            </CardItem>
                            <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Position:</Text>
                                <Text style={styles.text2}>Senior Copy Filer</Text>
                            </CardItem>
                            {/* <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Vacancies:</Text>
                                <Text style={styles.text2}>5</Text>
                            </CardItem> */}
                            <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Date Posted:</Text>
                                <Text style={styles.text2}>23/05/19</Text>
                            </CardItem>
                            <CardItem cardBody style={{marginLeft: 20}}>
                                <Text style={styles.text1}>Closing Date:</Text>
                                <Text style={styles.text2}>23/06/19</Text>
                            </CardItem>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 24
    },
    text1: {
        fontWeight: 'bold'
    },
    text2: {
        fontStyle: 'italic',
        marginLeft: 5,
        textDecorationLine: 'underline'
    }
})
