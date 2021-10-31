/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './app/store';
const {store} = configureStore();
import Routs from './app/navigation';

const tabContent = [
        {
            label: "Form Details", 
            content: "form details"/>
        },
        {
            label: "Edit Fields",
            content: "form details"/>        },
        {
            label: "Share Form",
            content: "form details"/>
        },
    ]

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Routs />
      </Provider>
    </>
  );
};

export default App;
