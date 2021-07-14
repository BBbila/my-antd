import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './mobx/index';
import './Common/styles/index.scss';
import App from './App';
import BarBox from './Box/BarBox/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider {...stores}>
    <BarBox />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
