import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBI_FZed__A7yUj5iHMsg_tWrTygVcZrvA',
            authDomain: 'auth-react-native-abed4.firebaseapp.com',
            databaseURL: 'https://auth-react-native-abed4.firebaseio.com',
            projectId: 'auth-react-native-abed4',
            storageBucket: 'auth-react-native-abed4.appspot.com',
            messagingSenderId: '573415320284'
        });
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
