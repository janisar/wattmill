import React from "react";
import {connect} from "react-redux";
import {NativeRouter, Route} from 'react-router-native';
import LoginPage from "./LoginPage";


class WattMillApp extends React.Component {

    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={LoginPage}/>
            </NativeRouter>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(WattMillApp);