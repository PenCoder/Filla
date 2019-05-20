import React, {Component} from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation';

import ContactsData from '../../data/people'
import Profile from './Profile';
import ContactComponent from './ContactComponent';


class Contacts extends Component {
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
        // const {navigate} = this.props.navigation;
        return (
            <ScrollView
                contentContainerStyle={styles.scroll}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {
                    contacts.map((contact, index) =>
                        <ContactComponent 
                            profile={contact} 
                            key={index} 
                            navigate={this.viewProfile}
                            />
                    )
                }
            </ScrollView> 
        )
    }
}

const ContactsStack = createStackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: { header: null }
    },
    Profile: {
        screen : Profile,
        navigationOptions: {
            header: null
        }
    }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

const styles = StyleSheet.create({
    scroll: {
        // justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    }
})

export default ContactsStack