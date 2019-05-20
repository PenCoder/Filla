import React from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Container, View, Card, CardItem, Left, Button, Content, Body, Text, Icon, Input, Right, Badge} from 'native-base'
import { Title } from 'react-native-paper';
import {  } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class PublicFilla extends React.Component {

    render() {
        const {filla} = this.props;
        const {icon} = this.props;
        return (
            <TouchableOpacity
                onPress={() => this.props.navigate("FillaView", {
                    filla: filla, icon: icon
                })}>
                <Card style={styles.card}>
                    <CardItem header style={{...styles.smallMargin, flexWrap: 'wrap'}} bordered>
                        <Left style={{alignItems: 'flex-start', marginRight: 2}}>
                            {/* <Icon name={icon.icon} style={{color: icon.iconColor, margin: 10}}/> */}
                            <Title style={{color: '#424242'}} numberOfLines={2}>{filla.title}</Title>
                        </Left>
                    </CardItem>
                    <Body>
                        <CardItem button>
                        <Badge style={styles.badge}>  
                            <Text style={{color: '#777'}}>CHEKY</Text>
                        </Badge>
                        <Badge style={styles.badge}>
                            <Text style={{color: '#777'}}>ReMarks</Text>
                        </Badge>
                        <Badge style={styles.badge}>
                            <Text style={{color: '#777'}}>`ReMarks`</Text>
                        </Badge>
                    </CardItem>
                    </Body>
                    <CardItem cardBody style={styles.imageContainer}>
                    { filla.media === "" ?
                        <View /> :
                        <Image source={{uri: filla.urlToImage}}
                            style={{
                                flex: 1,
                                height: 200,
                                borderRadius: 10,
                            }} />
                        }
                    </CardItem>
                    <CardItem>
                        <Text numberOfLines={2}>{filla.description}</Text>
                    </CardItem>

                    <CardItem >
                        <Icon name="thumbs-up" />
                        <Icon name="eye" />
                        <Icon name="chatbubbles" />
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 0,
        borderRadius: 10,
    },
    imageContainer: {
        margin: 10
    },
    italic: {
        fontStyle: 'italic'
    },
    smallMargin: {
        marginTop: 2,
        marginBottom: 2
    },
    horizontal: {
        flexDirection: 'row'
    },
    badge: {
        borderWidth: 1, 
        borderColor: '#ccc', 
        backgroundColor: 'transparent',
        margin: 5
    }
});

export default withNavigation(PublicFilla)