import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store/reducers';
import store from './store';
import RouteMap from './pages/routes';
import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RouteMap />
      </ConnectedRouter>
    </Provider>
  );
};

const renderApp = () => {
  const rootElement = document.getElementById('root');
  const renderedElement = (
      <App />
  );
  if (rootElement.hasChildNodes()) {
    hydrate(renderedElement, rootElement);
  } else {
    render(renderedElement, rootElement);
  }
};

renderApp();
