import React, {Component} from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Card, Body, Text, Icon, Left, CardItem, Badge} from 'native-base'
import {withNavigation} from 'react-navigation'

class ContactComponent extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {profile, key} = this.props;
        return (
                <TouchableOpacity style={styles.main}
                    onPress={() => {
                        this.props.navigate(key)
                    }}
                    >
                    <Card style={styles.card}>
                        <Body>
                            <Body>
                                <Image source={{uri: profile.PP}}
                                        style={{width: 160, height: 140}}/>
                                <Text>{profile.Name}</Text>
                            </Body>
                            <Body>
                                <Left style={styles.statusIconContainer}>
                                    <Icon name='radio-button-on' style={
                                        profile.status.isOnline ?
                                        {
                                            ...styles.statusIcon,
                                            color: 'green'
                                        }:
                                        {
                                            ...styles.statusIcon,
                                            color: 'gray'
                                        }
                                    }/>
                                </Left> 
                            </Body>
                        </Body>
                        <CardItem bordered>
                                <Icon name="chatboxes" style={{color: "#8BC34A", fontSize: 18}} />
                                <Icon name="thumbs-up" style={{color: "#999", fontSize: 18}} />
                                <Icon name="heart" style={{color: "#ED1727", fontSize: 18}} />
                        </CardItem>
                    </Card>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    card: {
        borderWidth: 0,
        borderRadius: 10,
    },
    horizontalBody: {
        // flexDirection: 'column'
    },
    statusIcon: {
        fontSize: 10,
        margin: 5
    },
    statusIconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default withNavigation(ContactComponent)