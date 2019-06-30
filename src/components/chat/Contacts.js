import React, {Component} from 'react'
import {ScrollView, StyleSheet, Dimensions, View} from 'react-native'
import {createStackNavigator} from 'react-navigation';

import ContactsData from '../../data/people'
import Profile from './Profile';
import ContactComponent from './ContactComponent';
import { Tile, Icon, Text } from 'react-native-elements';
import { Container, Body, CardItem } from 'native-base';

const {width, height} = Dimensions.get('window');

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            isDetail: false
        };
    };
    
    // Fetch data
    async componentDidMount(){
        try{
            this.setState({
                contacts: ContactsData.chatters
            })
        }catch(e){
            
        }
    }
    
    viewProfile = (selectedIndex) => {
        this.props.navigation.navigate("Profile", {
            SelectedIndex: selectedIndex, 
            contacts: this.state.contacts
        })
    }

    render(){
        const {contacts} = this.state;
        const {navigate} = this.props.navigation;
        var tileWidth = (width * 0.45) 
        var tileHeight = (width * 0.6)
        return (
            <Container>
                <ScrollView
                    contentContainerStyle={styles.scroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    {
                        contacts.map((contact, index) =>
                            // <ContactComponent 
                            //     profile={contact} 
                            //     key={index} 
                            //     navigate={this.viewProfile}
                            //     />
                            
                            <Tile
                                width={tileWidth}
                                height={tileHeight}
                                key={index}
                                imageSrc={{uri: contact.PP}}
                                imageContainerStyle={styles.tileImageStyle}
                                // titleStyle={styles.tileTitle}
                                iconContainerStyle={styles.tileIconContainer}
                                contentContainerStyle={styles.tileContentContainer}
                                containerStyle={styles.tileContainer}
                                onPress={() => navigate("Profile", {contacts: contacts})}>
                                <View>
                                    <CardItem header>
                                        <Text>{contact.Name}</Text>
                                    </CardItem>
                                    <View style={{flex: 1, justifyContent: 'space-evenly', flexDirection: 'row'}}>
                                        <Icon name="thumbs-o-up" type='font-awesome' color="#999" size={18} />
                                        <Icon name="comment" type='evil-icons' color="#8BC34A" size={18} />
                                        <Icon name="heart" type='font-awesome' color="#ED1727" size={18} />
                                    </View>
                                </View>
                            </Tile>
                            
                        )
                    }
                </ScrollView> 
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    scroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    tileContainer: {
        margin: 6,
        borderRadius: 5
    },
    tileImageStyle: {
        height: (width * 0.5)
    },
    // tileTitle: {
    //     fontSize: 14,
    //     fontWeight: '100',
    //     fontStyle: 'italic'
    // },
    tileIconContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start'
    },
    // tileContentContainer: {
    //     opacity: 0.9, 
    //     backgroundColor: '#fff',
    // },
})
