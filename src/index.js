import  React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
reportWebVitals();
