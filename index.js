import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import Console from './Console';

// live reload index.html ，参考：
// https://stackoverflow.com/questions/33183931/how-to-watch-index-html-using-webpack-dev-server-and-html-webpack-plugin
if (process.env.IS_DEVELOPMENT) {
  require('./index.html');
}

const rootElement = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    rootElement
  );
};

render(Console);

// 参考：https://github.com/gaearon/react-hot-boilerplate/blob/next/src/index.js
if (module.hot) {
  module.hot.accept('./Console', () => render(Console));
}
