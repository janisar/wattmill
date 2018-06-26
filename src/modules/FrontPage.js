import React from "react";
import {Button, StyleSheet, Text, View} from 'react-native';
import {Permissions} from "expo";
import {watchPosition} from "../actions";
import {connect} from "react-redux";

class FrontPage extends React.Component {

    state = {
        location: null,
        errorMessage: null,
    };

    startTracking = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        } else {
            this.props.watchPosition();
        }
    };

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        return (
            <View>
                <Button style={styles.startButton}
                        title="Start"
                        onPress={this.startTracking}/>
                <Text>{text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    startButton: {
        marginTop: '100px'
    }
});

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = {
    watchPosition
};


export default connect(mapStateToProps, mapDispatchToProps)(FrontPage)