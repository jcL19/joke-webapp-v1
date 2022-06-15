import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { JokeContextProvider } from './context/JokeContextProvider';

ReactDOM.render(
  <JokeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </JokeContextProvider>,
  document.getElementById('root')
);

