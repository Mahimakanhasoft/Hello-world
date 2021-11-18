import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import From from './display/form';
import Home from './home';
import Model from './model';
import Contact from './contact';
import About from './display/about';
import List from './display/list';
import ChoreForm from './ChoreForm';
import reportWebVitals from './reportWebVitals';
import Name from './name';
import Api from './api';
// import Model from './model';
import BaseModal from './baseModal'
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router, NavLink, Switch } from 'react-router-dom'
import reducer from './store/reducer/index'
// export * from "react-router";


ReactDOM.render(
  
  <React.StrictMode>
    {/* <Api /> */}
   <BaseModal />
    {/* <Router>
      <div>
        <Switch>
        
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact}/>
          <Route path="/about" exact component={About}/>
          <Route path="/from" exact component={From} />
          <Route path="/list" exact component={List} />
        </Switch>
      </div>
     
    </Router> */}
   
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
