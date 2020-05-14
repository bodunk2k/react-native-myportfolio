import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

class  PhoneHistory extends Component  {


    static navigationOptions = {
        title: 'Phone History'
    };
        render() {
        
        return (
            <View>
                <Text>
                    Phone History will go here
                </Text>
            </View>
        )
        }
    }
    
    export default PhoneHistory;