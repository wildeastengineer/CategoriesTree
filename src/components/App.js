import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../store/reducers';
import { CategoriesTree } from './CategoriesTree';
// Styles
import './App.css';

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CategoriesTree />
            </Provider>
        );
    }
}

export default App;
