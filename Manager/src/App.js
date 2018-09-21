import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'; 
import LoginForm from './components/LoginForm';
import Router from './Router';

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
        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;