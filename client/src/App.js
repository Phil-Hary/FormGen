import React from 'react';
import logo from './logo.svg';
import './App.css';
//import "../node_modules/jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Dashboard from './dashboard';
import LayOut from './layout';

function App() {
  return (
  (localStorage.userName == "Admin" && localStorage.password == '123')?<LayOut/>:<Login/>
  );
}

export default App;
