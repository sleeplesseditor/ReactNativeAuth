import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBI_FZed__A7yUj5iHMsg_tWrTygVcZrvA',
            authDomain: 'auth-react-native-abed4.firebaseapp.com',
            databaseURL: 'https://auth-react-native-abed4.firebaseio.com',
            projectId: 'auth-react-native-abed4',
            storageBucket: 'auth-react-native-abed4.appspot.com',
            messagingSenderId: '573415320284'
        });   
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;