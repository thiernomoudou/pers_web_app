import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './../redux/configureStore';
import App from './App/index';

const Root = (props) => {
    const store = configureStore();
    
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
  
  export default Root;