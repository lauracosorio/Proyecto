import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { DashboarSeller } from './Pages/DashboardSeller';
import { DashboardUser } from './Pages/DashboardUser';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/login" component={Login}  />
     <Route exact path="/sign-up" component={SignUp}  />
     <Route exact path="/seller-dashboard" component={DashboarSeller}  />
     <Route exact path="/user-dashboard" component={DashboardUser}  />

   </Switch>
   </BrowserRouter>
  )
}

export default App;
