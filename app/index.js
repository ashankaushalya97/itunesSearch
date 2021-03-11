import React from 'react';
import Routs from './navigation';
import {Provider} from 'react-redux';
import configureStore from './store';
const {store} = configureStore();

const App = () => {
  return (
    // <Provider store={store}>
      <Routs />
    // </Provider>
  );
};
export default App;
