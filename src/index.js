import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import SideBar from './SideBar';
import{BrowserRouter as Router,Route} from "react-router-dom";
import LoginPage from './LoginPage';
import RoutingLink from './RoutingLink';

function Index() {
  return (
    <div>
      <RoutingLink/>
      <SideBar/> 
      {/* <LoginPage/> */}
    </div>
  );
}

ReactDOM.render(
    <Index />,
  document.getElementById('root')
);