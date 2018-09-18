import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'; 

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBdzmX2gTpGlk_rDzX6Vr4uHEg26wb7FfQ',
            authDomain: 'manager-e4be5.firebaseapp.com',
            databaseURL: 'https://manager-e4be5.firebaseio.com',
            projectId: 'manager-e4be5',
            storageBucket: 'manager-e4be5.appspot.com',
            messagingSenderId: '718003912649'
          };

          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;