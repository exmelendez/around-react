import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './blocks/content/content.css';
import './blocks/footer/footer.css';
import './blocks/form/form.css';
import './blocks/header/header.css';
import './blocks/modal/modal.css';
import './blocks/page/page.css';
import './blocks/photos/photos.css';
import './blocks/profile/profile.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
