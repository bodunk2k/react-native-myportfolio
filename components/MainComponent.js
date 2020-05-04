import React, { Component } from 'react';
import Home from './HomeComponent';
import Experience from './ExperienceComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const ExperienceNavigator = createStackNavigator(
    {
        Experience: { screen: Experience}
    },
    {
        InitialRouteName: 'Experience',
        NavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home}
    },
    {
        NavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Experience: {screen: ExperienceNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {
        render() {
            return ( 
                <View style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                    }}>
                    <MainNavigator/>       
                </View>
            );
        }
    
}

export default Main;