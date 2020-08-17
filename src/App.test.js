import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore} from './configureStore';

const store = configureStore();
test('renders App', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
