import {Text, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {loginUser} from '../actions';
import Expo from 'expo';

class LoginPage extends React.Component {

    android = "837586366929-da2k1q6pdqfcdd01u93m2djce20g6995.apps.googleusercontent.com";
    web = "837586366929-ggrok38frvcd3ktr4omn07gqlnhv0rmb.apps.googleusercontent.com";

    static async postUser(user) {
        fetch("http://127.0.0.1:5000/envoiceserver/us-central1/user" + user).then(resp => {
            console.log(resp);
        }, onerror => console.log(onerror));
    }

    async login() {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: this.android,
                webClientId: this.web,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result;
            } else {
                return {cancelled: true};
            }
        } catch (e) {
            return {error: true};
        }
    }

    componentDidMount() {
        this.login().then(result => {
            LoginPage.postUser(result);
        });
    }

    render() {
        return (
            <View>
                <Text>Miskit l2ks putsi</Text>
            </View>
        )
    }
}

initMapStateToProps = state => {
    return {
        state
    }
};

initMapDispatchToProps = {
    loginUser
};

export default connect(initMapStateToProps, initMapDispatchToProps)(LoginPage);