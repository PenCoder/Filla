import React from 'react';
import {Image, StyleSheet} from 'react-native'
import {Container, Header, Icon, Content, Card, CardItem, Body, Left, Right, Text, DeckSwiper} from 'native-base'
// import {Grid, Col} from 'react-native-easy-grid'

export default class Profile extends React.Component{
    
    render(){
        const {navigation} = this.props;
        // const profile = navigation.getParam("profile");
        const contacts = navigation.getParam("contacts");
        return (
            <Container>
                <DeckSwiper
                    dataSource={contacts}
                    renderItem= {item =>
                    <Card>
                        <CardItem>
                            { item.status.isOnline ?
                                <Body style={styles.horizontalBody}>
                                    <Icon />
                                    <Text note>online</Text>
                                </Body> :
                                <Body style={styles.horizontalBody}>
                                    <Icon />
                                    <Text note>offline</Text>
                                </Body>    
                            }
                        </CardItem>
                        <CardItem header>
                            <Text>{item.Name}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: item.PP}}
                                style={{
                                    flex: 1,
                                    height: 300
                                }}/>
                        </CardItem>
                    </Card>
                    }>
                </DeckSwiper>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    card: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 0,
        borderRadius: 10
    },
    horizontalBody: {
        flexDirection: 'column'
    }
});