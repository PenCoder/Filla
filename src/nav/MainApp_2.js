import {createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';

import MainView from '../views/MainView'
import SportsComponent from '../components/filla/SportsComponent';

// Filla Screens
import PublicStack from '../components/filla/Public';
import SportsStack from '../components/filla/Sports';
import CampusStack from '../components/filla/Campus';
import ShowbizStack from '../components/filla/Showbiz';

// Chat Screens
import ContactsStack from '../components/chat/Contacts';
import GroupStack from '../components/chat/Group';
import MyProfileStack from '../components/chat/MyProfile';
import PrivateStack from '../components/chat/Private';

// Services Screens
import ConstultantStack from '../components/services/Consultants';
import ProvidersStack from '../components/services/Providers';
import JobsStack from '../components/services/Jobs';

const FillaTab = createMaterialTopTabNavigator(
    {
        Public:
        {
            screen: PublicStack,
            navigationOptions: {
                title: 'Public', header: null
            }
        },
        Sports: {
            screen: SportsStack,
            navigationOptions: {
                title: 'Sports', header: null
            }
        },
        Campus: {
            screen: CampusStack,
            navigationOptions: {
                title: 'Campus', header: null
            }
        },
        Showbiz: {
            screen: ShowbizStack,
            navigationOptions: {
                title: 'showbiz', header: null
            }
        }
    },
);
const ChatTab = createMaterialTopTabNavigator(
    {
        Private: {
            screen: PrivateStack,
            navigationOptions: {
                title: 'pm', header: null
            },
        },
        Group: {
            screen: GroupStack,
            navigationOptions: {
                title: 'group', header: null
            }
        },
        // Conference: {
        //     screen: Conference,
        //     navigationOptions: {
        //         title: 'conference', header: null
        //     }
        // },
        Contacts: {
            screen: ContactsStack,
            navigationOptions: {
                title: 'contacts', header: null
            }
        },
        MyProfile: {
            screen: MyProfileStack,
            navigationOptions: {
                title: 'me', header: null
            }
        },
    }
);

const ServicesTab = createMaterialTopTabNavigator(
    {
        Consultants: {
            screen: ConstultantStack,
            navigationOptions: {
                title: 'consultants', header: null
            }
        },
        Providers: {
            screen: ProvidersStack,
            navigationOptions: {
                title: 'providers', herder: null
            }
        },
        Jobs: {
            screen: JobsStack,
            navigationOptions: {
                title: 'jobs', header: null
            }
        }
    }
);

// Bottom Tabs
const MainBottomTabs = createBottomTabNavigator(
    {
        Filla: {
            screen: FillaTab,
            navigationOptions: {
                title: 'filla', header: null
            }
        },
        Chat: {
            screen: ChatTab,
            navigationOptions: {
                title: 'chat', header: null
            }
        },
        Services: {
            screen: ServicesTab,
            navigationOptions: {
                title: 'services', header: null
            }
        },
        
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
        }
    }
)

export default MainApp = createAppContainer(MainStack);