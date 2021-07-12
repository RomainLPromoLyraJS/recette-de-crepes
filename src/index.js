// == Package imports
import React from 'react';
import ReactDOM from 'react-dom';

// == Local imports
// styles
import '../src/styles/_index.scss';
import '../src/styles/_reset.scss';
import '../src/styles/_vars.scss';
// components
import App from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

