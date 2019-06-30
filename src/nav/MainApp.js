import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator} from 'react-navigation';
import { Tabs, Tab, StyleProvider, TabHeading, ScrollableTab, Text, Container, Fab, Root, Header } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { Icon, Button } from 'react-native-elements';

// Login Screen
import LoginForm from '../components/Authentication/LoginForm';
import RegisterForm from '../components/Authentication/RegisterForm';
import RegisterProfile from '../components/Authentication/RegisterProfile';

// Filla Screens
import Fillas from '../components/filla/Fillas'
import News from '../components/filla/News';
import Campus from '../components/filla/Campus';
import Showbiz from '../components/filla/Showbiz';
import Event from '../components/filla/Event';

// Chat Screens
import Contacts from '../components/chat/Contacts';
import Group from '../components/chat/Group';
import MyProfile from '../components/chat/MyProfile';
import Private from '../components/chat/Private';

// Services Screens
import Consultants from '../components/services/Consultants';
import Providers from '../components/services/Providers';
import Jobs from '../components/services/Jobs';


// Modal Screens
import FillaView from '../components/filla/FillaView';
import Chat from '../components/chat/Chat';
import Profile from '../components/chat/Profile';
import PostForm from '../components/forms/PostForm';

import MainHeader from './MainHeader';

class FillaTabs extends React.Component {
    state = {
        fabActive: false
    }
    render(){
    const {navigation} = this.props
    return(
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Header>
                    <MainHeader />
                </Header>
                <Tabs tabContainerStyle={{marginTop: -20}}> 
                    <Tab heading={<TabHeading><Text>Filla</Text></TabHeading>}>
                        <Fillas navigation={navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Events</Text></TabHeading>}>
                        <Event navigation={navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Live</Text></TabHeading>}>
                        <Campus />
                    </Tab>
                    {/* <Tab heading={<TabHeading><Text>Showbiz</Text></TabHeading>}>
                        <Showbiz />
                    </Tab> */}
                    {/* <Tab heading={<TabHeading><Text>Locate</Text></TabHeading>}>
                        <Location />
                    </Tab> */}
                </Tabs>
            </Container>
        </StyleProvider>
    )
}
}
class ChatTabs extends React.Component{
    render(){
        const {navigation} = this.props
        return(
            <StyleProvider style={getTheme(material)}>
                <Tabs>
                    <Tab heading={<TabHeading><Text>Private</Text></TabHeading>}>
                        <Private navigation={navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Group</Text></TabHeading>}>
                        <Group navigation={navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Contacts</Text></TabHeading>}>
                        <Contacts navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Me</Text></TabHeading>}>
                        <MyProfile />
                    </Tab>
                </Tabs>
            </StyleProvider>
        )
    }
}
class ServicesTabs extends React.Component {
    render(){
        return(
            <StyleProvider style={getTheme(material)}>
                
                <Tabs>
                    <Tab heading={<TabHeading><Text>Consult</Text></TabHeading>}>
                        <Consultants navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Jobs</Text></TabHeading>}>
                        <Jobs navigation={this.props.navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Providers</Text></TabHeading>}>
                        <Providers navigation={this.props.navigation}/>
                    </Tab>
                </Tabs>
            </StyleProvider>
        )
    }
}
// Bottom Tabs
const MainBottomTabs = createBottomTabNavigator(
    {
        Filla: {
            screen: FillaTabs,
            navigationOptions: {
                title: 'filla', header: null
            }
        },
        People: {
            screen: ChatTabs,
            navigationOptions: {
                title: 'people', header: null,
                tabBarIcon: (({tintColor, focused, horizontal}) => 
                {
                    return <Icon name='people' color={tintColor}/>
                })
            }
        },
        Places: {
            screen: ServicesTabs,
            navigationOptions: {
                title: 'places', header: null
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 18,
                fontWeight: "bold"
            },
            activeTintColor: '#9E9D24',
        }
    }
);

const MainStack = createStackNavigator(
    {
        Main: {
            screen: MainBottomTabs,
            navigationOptions: {header: null}
        },
        View: {
            screen: FillaView,
            navigationOptions: {
                headerTitle: 'Post Details',
                headerStyle: {backgroundColor: '#9E9D24'},
                headerTintColor: '#fff'
            }
        },
        Conversation: {
            screen: Chat,
            navigationOptions: {
                headerTitle:  header='Chat',
                headerStyle: {backgroundColor: '#9E9D24'},
                headerTintColor: '#fff'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                headerTitle: 'Profile Details',
                headerStyle: {backgroundColor: '#9E9D24'},
                headerTintColor: '#fff'
            }
        },
        PostForm: {
            screen: PostForm,
            navigationOptions: {
                headerTitle: 'Input Post',
                headerStyle: {backgroundColor: '#9E9D24'},
                headerTintColor: '#fff'
            }
        },
    },
    {
        mode: 'modal',
    }
)
// Authentication Stack
const AuthStack = createSwitchNavigator({
    Login: LoginForm,
    Register: RegisterForm,
    RegisterProfile: RegisterProfile
    },
    {
        headerMode: 'none'
    })

const MainSwitch = createSwitchNavigator(
    {
        Auth: AuthStack,
        MainStack: MainStack,
    },
    {
        initialRouteName: 'Auth'
    }
)

const MainApp = createAppContainer(MainSwitch);
export default () => 
    <Root>
        <StyleProvider style={getTheme(material)}>
            <MainApp />
        </StyleProvider>
    </Root>