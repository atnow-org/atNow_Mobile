import React from 'react';
import {
  StatusBar, Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from './src/scripts/state/reducers';

import MainTabBar from './src/scripts/navigation/mainBottomTab';

// export store
// const store = createStore(reducers, applyMiddleware(thunk));
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const App = () => {
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <MainTabBar />
    </Provider>
  );
};

export default App;
