import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PhotoStore from './resources/store/photo-store';

const photo = new PhotoStore();

export const Context = createContext(photo);

ReactDOM.render(
  <Context.Provider value={photo}>
    <App />
  </Context.Provider>,
  document.getElementById('root') || document.createElement('div') // for testing purposes
);

reportWebVitals();
