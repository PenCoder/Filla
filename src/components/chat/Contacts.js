import React, {Component} from 'react'
import {ScrollView, StyleSheet, Dimensions} from 'react-native'
import {createStackNavigator} from 'react-navigation';

import ContactsData from '../../data/people'
import Profile from './Profile';
import ContactComponent from './ContactComponent';
import { Tile, Icon, Text } from 'react-native-elements';
import { View, Container, Body } from 'native-base';

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
                            <View style={styles.tileContainer}
                                key={index}>
                                <Tile
                                    width={160}
                                    height={220}
                                    imageSrc={{uri: contact.PP}}
                                    title={contact.Name}
                                    imageContainerStyle={styles.tileImageStyle}
                                    titleStyle={styles.tileTitle}
                                    iconContainerStyle={styles.tileIconContainer}
                                    contentContainerStyle={styles.tileContentContainer}
                                    onPress={() => navigate("Profile")}>
                                        <View style={{flex: 1, justifyContent: 'space-evenly', flexDirection: 'row'}}>
                                            <Icon name="thumbs-o-up" type='font-awesome' color="#999" size={18} />
                                            <Icon name="comment" type='evil-icons' color="#8BC34A" size={18} />
                                            <Icon name="heart" type='font-awesome' color="#ED1727" size={18} />
                                        </View>
                                </Tile>
                            </View>
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
        margin: 5,
        borderRadius: 5
    },
    tileImageStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: 160,
        height: 180
    },
    tileTitle: {
        fontSize: 14,
        fontWeight: '100',
        fontStyle: 'italic'
    },
    tileIconContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start'
    },
    tileContentContainer: {
        opacity: 0.9, 
        backgroundColor: '#fff',
    },
})
