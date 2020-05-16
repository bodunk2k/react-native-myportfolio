import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {connect} from 'react-redux';
import { GET_PHONELOOKEUP } from '../redux/ActionTypes';

class PhoneHistory extends Component  {

    constructor(props) {
        super(props);
    
        
    }

    WholeList() {
        return this.props.history.map(function(hist, i){
          return(
            <View key={i}>
              <Text>{hist.caller_name}</Text>
              <View>
                <Text>{hist.phoneNumber}</Text>
              </View>
            </View>
          );
        });
      }
    static navigationOptions = {
        title: 'Phone History'
    };
        render() {
            return(
                <View>
                    {this.WholeList()}
                </View>
            );
            
        }
        /*
                {this.props.history.caller_name}
                </Text>
                <Text>
                {this.props.history.phoneNumber}
                </Text> */
        
}
function mapStateToProps(state){
        return {
            history: state.history
        };
    }
    const styles = StyleSheet.create({
 
        MainContainer: {
          flex: 1,
          margin: 10
          
        },
        
        TextStyle:{
          fontSize : 25,
           textAlign: 'center'
        }
        
       });
export default connect(mapStateToProps)(PhoneHistory);
    