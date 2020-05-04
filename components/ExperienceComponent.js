import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';


class  Experience extends Component  {


static navigationOptions = {
    title: 'Experience'
};
    render() {
    
    return (
        <View>
            <Text>
                My Experiences will be listed here
            </Text>
        </View>
    )
    }
}

export default Experience;