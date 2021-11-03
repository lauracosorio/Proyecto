import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { DashboarSeller } from './Pages/DashboardSeller';
import { DashboardUser } from './Pages/DashboardUser';
import Home from './Pages/Home';
import HomeSeller from './Pages/HomeSeller';
import HomeUser from './Pages/HomeUser';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/seller" component={HomeSeller} />
     <Route exact path="/user" component={HomeUser} />
     <Route exact path="/login" component={Login}  />
     <Route exact path="/sign-up" component={SignUp}  />
     <Route exact path="/seller-dashboard" component={DashboarSeller}  />
     <Route exact path="/user-dashboard" component={DashboardUser}  />

   </Switch>
   </BrowserRouter>
  )
}

export default App;
