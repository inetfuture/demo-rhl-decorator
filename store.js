import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, {}, middleware);
export default store;

if (module.hot) {
  module.hot.accept('./reducer', () => {
    const newReducer = require('./reducer').default;
    store.replaceReducer(newReducer);
  });
}

