import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator} from 'react-navigation';
import { Tabs, Tab, StyleProvider, TabHeading, ScrollableTab, Text, Container, Fab, Root } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import {MenuProvider} from 'react-native-popup-menu'
// Login Screen
import LoginForm from '../components/Authentication/LoginForm';
import RegisterForm from '../components/Authentication/RegisterForm';
import RegisterProfile from '../components/Authentication/RegisterProfile';

// Filla Screens
import Post from '../components/filla/Post'
import News from '../components/filla/News';
import Campus from '../components/filla/Campus';
import Showbiz from '../components/filla/Showbiz';

// Chat Screens
import ContactsStack from '../components/chat/Contacts';
import GroupStack from '../components/chat/Group';
import MyProfileStack from '../components/chat/MyProfile';
import Private from '../components/chat/Private';

// Services Screens
import Consultants from '../components/services/Consultants';
import ProvidersStack from '../components/services/Providers';
import JobsStack from '../components/services/Jobs';


// Modal Screens
import FillaView from '../components/filla/FillaView';
import Chat from '../components/chat/Chat';
import { Icon, Button } from 'react-native-elements';


class FillaTabs extends React.Component {
    state = {
        fabActive: false
    }
    render(){
    const {navigation} = this.props
    return(
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading={<TabHeading><Text>Posts</Text></TabHeading>}>
                        <Post navigation={navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading><Text>News</Text></TabHeading>}>
                        <News />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Campus</Text></TabHeading>}>
                        <Campus />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Showbiz</Text></TabHeading>}>
                        <Showbiz />
                    </Tab>
                    {/* <Tab heading={<TabHeading><Text>Locate</Text></TabHeading>}>
                        <Location />
                    </Tab> */}
                </Tabs>
                <Fab 
                        raised
                        active={this.state.fabActive}
                        position="topRight"
                        direction="left"
                        containerStyle={{}}
                        style={{backgroundColor: '#8BC34A'}}
                        onPress={() => this.setState({ fabActive: !this.state.fabActive})}>
                            <Icon name='share' type='ant-design'/>
                            <Button bordered rounded style={{backgroundColor: 'white'}}>
                                <Icon name="add-circle-outline" style={{color: '#26A69A', fontSize: 18}}/>
                            </Button>
                            <Button style={{backgroundColor: 'white'}}
                                rounded bordered
                                onPress={() =>
                                    this.onShowActionSheet(categories)
                                }>
                                <Icon name="list" />
                            </Button>
                            <Button rounded bordered style={{backgroundColor: 'white'}}>
                                <Text>r</Text>
                            </Button>
                        </Fab>
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
                        <GroupStack />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Contacts</Text></TabHeading>}>
                        <ContactsStack />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Me</Text></TabHeading>}>
                        <MyProfileStack />
                    </Tab>
                </Tabs>
            </StyleProvider>
        )
    }
}
const ServicesTabs = () => {
    return(
        <StyleProvider style={getTheme(material)}>
            <Tabs>
                <Tab heading={<TabHeading><Text>Consult</Text></TabHeading>}>
                    <Consultants />
                </Tab>
                <Tab heading={<TabHeading><Text>Jobs</Text></TabHeading>}>
                    <JobsStack />
                </Tab>
                <Tab heading={<TabHeading><Text>Campus</Text></TabHeading>}>
                     <ProvidersStack />
                </Tab>
            </Tabs>
        </StyleProvider>
    )
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
        Chat: {
            screen: ChatTabs,
            navigationOptions: {
                title: 'chat', header: null
            }
        },
        Services: {
            screen: ServicesTabs,
            navigationOptions: {
                title: 'services', header: null
            }
        }
    },
    {
        tabBarOptions: {
            labelStyle: {
                        fontSize: 16
                    },
        }
    }
);

const MainStack = createStackNavigator(
    {
        Main: {
            screen: MainBottomTabs,
            navigationOptions: {header: null}
        },
        View: FillaView,
        Conversation: Chat
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)
// Authentication Stack
const AuthStack = createStackNavigator({
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
        <MainApp />
    </Root>