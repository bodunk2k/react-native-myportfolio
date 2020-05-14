import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';

class Phone extends Component {
    constructor() {
        super();

        this.state = {
            valid: "",
            type: "",
            value: ""
        };

        this.updateInfo = this.updateInfo.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
    }

    updateInfo() {
        this.setState({
            valid: this.phone.isValidNumber(),
            type: this.phone.getNumberType(),
            value: this.phone.getValue()
        });
        fetch("https://twilio-lookup.p.rapidapi.com/PhoneNumbers/caller-name?phoneNumber=8064353731", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "twilio-lookup.p.rapidapi.com",
                "x-rapidapi-key": "3e66c59a24msh59c0fa96f66ee46p1b8b44jsnd50f07d63fcf"
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log(response.callerName.caller_name);
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderInfo() {
        if (this.state.value) {
            return (
                <View style={styles.info}>
                    <Text>
                        Is Valid:{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            {this.state.valid.toString()}
                        </Text>
                    </Text>
                    <Text>
                        Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
                    </Text>
                    <Text>
                        Value:{" "}
                        <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
                    </Text>
                </View>
            );
        }
    }

    static navigationOptions = {
        title: 'Phone Lookup'
    };
    render() {

        return (
            <View style={styles.container}>
                <PhoneInput
                    ref={ref => {
                        this.phone = ref;
                    }}
                />

                <TouchableOpacity onPress={this.updateInfo} style={styles.button}>
                    <Text>Get Info</Text>
                </TouchableOpacity>

                {this.renderInfo()}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        paddingTop: 60
    },
    info: {
        // width: 200,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginTop: 20
    },
    button: {
        marginTop: 20,
        padding: 10
    }
});
export default Phone;