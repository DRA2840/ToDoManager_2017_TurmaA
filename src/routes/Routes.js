import {createStackNavigator, createTabNavigator} from 'react-navigation'
import {Login, Register, ToDoTasks, Done, App} from '../screens/Screens'
import { Platform } from 'react-native';

const tabScreenNavigator = createTabNavigator(
    {
        pageToDoTasks: { screen: ToDoTasks },
        pageDone: {screen: Done}
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false
        }
    }
);

export const Routes = createStackNavigator({
        pageApp:{screen: App},
        pageLogin: {screen: Login},
        pageRegister: {screen: Register},
        pageTaskList: {
            screen: tabScreenNavigator,
            navigationOptions: {
                ...Platform.select({
                    ios:{
                        title: 'Task List'
                    },
                    android:{
                        header: null
                    }
                })
            }
        }
    },
    {
        headerMode: 'screen'
    } 
);
